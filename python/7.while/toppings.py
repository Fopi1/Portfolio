prompt = "Enter toppings for your pizza"
prompt += "\n(Enter 'quit' if you want to leave) "
while True:
    Topping = input("\n"+prompt)
    if Topping == "quit":
        break
    print("\nYou wanna",Topping+"?")