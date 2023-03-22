def print_models(unprinted_models,printed_models):
    for unprinted in unprinted_models:
        print(unprinted,"should be printed")
    while unprinted_models:
        printing_models = []
        printing_models = unprinted_models.pop()
        print("Printing",printing_models)
        printed_models.append(printing_models)

def show_models(printed_models):
    for model in printed_models:
        print(model,"is printed")
