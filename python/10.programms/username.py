
import json

file_name = "username.json"

def get_username():
    try:
        with open(file_name) as file_object:
            username = json.load(file_object)
    except FileNotFoundError:
        pass
    else:
        return username
    
def show_username(username):
    if username:
        print("Your username is",username)
    else:
        username = input("Enter your username ")
        with open(file_name,"w") as f_obj:
            json.dump(username,f_obj)
            print("We'll remember you,",str(username))

def get_new_username():
    with open(file_name) as mega_object:
        imported_username = json.load(mega_object)
    print("Enter your username")
    username = input()
    if username == imported_username:
        show_username(username)
    else:
        with open(file_name,"w") as yes:
            json.dump(username,yes)
            print("We'll remember you",username)
            
get_new_username()