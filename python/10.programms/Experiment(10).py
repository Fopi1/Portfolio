path = "E:\Works\learning_python.txt"

with open (path) as file_object:
    message = file_object.readlines()
    for one_message in message:
        print(one_message.strip())

print("\n")        
with open (path) as file_object:
    message = file_object.read()
    print(message)

print("\n")    
with open (path) as file_object:
    messages = file_object.readlines()
tips_for_python = ""
for message in messages:
    tips_for_python += message
print(tips_for_python)