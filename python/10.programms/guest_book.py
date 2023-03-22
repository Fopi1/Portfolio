path = "E:\Works\defs,imports\guest_book.txt"
with open(path,"w") as file_object:
    while True:
        print("Write your name")
        print("(you can enter 'exit' to leave)")
        name = input()
        if name == "exit":
            break
        print("Greeting you",name.title())
        file_object.write("Hello"+" "+name.title()+"\n")