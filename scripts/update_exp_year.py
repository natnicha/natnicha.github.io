from datetime import datetime

current_year = datetime.now().year
value = current_year - 2018

readme_file = "README.md"
with open(readme_file, "r") as f:
    content = f.read()

new_string = "{0}+ years of experience".format(str(value))
content = content.replace("6+ years of experience", new_string)

with open(readme_file, "w") as f:
    f.write(content)

