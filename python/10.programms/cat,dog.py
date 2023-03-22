path_cat = "E:\Works\defs,imports\cat.txt"
path_dog = "E:\Works\defs,imports\dog.txt"

def show_dog_name():
    try:
        with open(path_dog) as dog_object:
            dog = dog_object.read()
    except:
        pass
    else:
        print(dog.strip())

def show_cat_name():
    try:
        with open (path_cat) as cat_object:
            cat = cat_object.read()
    except:
        print("We cant find your file")
    else:
        print(cat.replace("dog","cat").strip())

show_cat_name()
print("\n")
show_dog_name()