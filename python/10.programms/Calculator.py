while True:
    print("Enter first number")
    first_number = input()
    print("Enter second number")
    second_number = input()
    try:
        answer = int(first_number)+int(second_number)
    except TypeError:
        print("You entered text instead of numbers")
    except ValueError:
        print("You entered text instead of numbers")
    else:
        print(answer)
    break