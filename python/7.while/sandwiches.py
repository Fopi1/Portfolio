sandwich_orders = ["Pastrami","Hamburger","Normal","Pastrami","Fast fly","Rocket fart","Pastrami"]
finished_sandwiches = []
missing_sandwiches = []

while "Pastrami" in sandwich_orders:
    Pastrami = sandwich_orders.remove("Pastrami")

for sandwich in sandwich_orders:
    print(sandwich,"is ready")

while sandwich_orders:
    sandwich = sandwich_orders.pop()
    finished_sandwiches.append(sandwich)

for finished_sandwich in finished_sandwiches:
    print("We can delivery",finished_sandwich)