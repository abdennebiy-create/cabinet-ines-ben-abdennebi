with open("gen_rest.py", "r") as f:
    content = f.read()
content = content.replace("'question \"¿Consume regularmente", "'question': \"¿Consume regularmente")
with open("gen_rest.py", "w") as f:
    f.write(content)
