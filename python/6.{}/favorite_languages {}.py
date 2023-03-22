favorite_languages = {
 'jen': 'python',
 'sarah': 'c',
 'edward': 'ruby',
 'phil': 'python',
 }

Candidates = ["alexandr","phil","sasha","sarah"]

for name in favorite_languages:
    if name in Candidates:
        print("Would u like to take the test",name.title()+"?")
    else:
        print(name.title(),"you passed the test")