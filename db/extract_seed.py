import re
import json

with open('/home/tharak/anti-grav/CineArchive/app.js', 'r') as f:
    content = f.read()

# Extract arrays
arrays = re.findall(r'const SEED_([A-Z_]+) = (\[.*?\]);', content, re.DOTALL)

with open('/home/tharak/anti-grav/CineArchive/db/full_seed.sql', 'w') as f:
    for name, array_str in arrays:
        # Convert JS array to Python list
        # It's mostly valid JSON if we add quotes to keys, but let's use regex
        array_str = re.sub(r'(\w+):', r'"\1":', array_str)
        # Fix trailing commas if any, single quotes to double quotes, etc.
        # A simpler way: we just output the insert statements
        try:
            # Some manual cleanups might be needed since it's JS not strict JSON
            array_str = array_str.replace("'", '"')
            data = json.loads(array_str)
            
            table_name = name.lower()
            if len(data) > 0:
                keys = data[0].keys()
                columns = ', '.join(keys)
                f.write(f"-- Data for {table_name}\n")
                
                for row in data:
                    vals = []
                    for k in keys:
                        val = row.get(k)
                        if val is None:
                            vals.append('NULL')
                        elif isinstance(val, str):
                            val = val.replace("'", "''")
                            vals.append(f"'{val}'")
                        elif isinstance(val, bool):
                            vals.append('TRUE' if val else 'FALSE')
                        else:
                            vals.append(str(val))
                    values_str = ', '.join(vals)
                    f.write(f"INSERT INTO {table_name} ({columns}) VALUES ({values_str});\n")
                f.write("\n")
        except Exception as e:
            print(f"Error parsing {name}: {e}")

