"""
tpe-2019 :: Générer l'aléatoire

Exemple d'un générateur congruentiel linéaire en Python

Corentin POUPRY <HelloEdit>
Mika LIAO <Datacre>
"""


def gcl(m, a, c, x):
    """
        Générateur congruentiel linéaire en utilisant la formule
        telle que décrite par Derrick Lehmer ainsi que les générateurs
        Python (https://www.programiz.com/python-programming/generator)
    """
    while True:
        yield x
        x = (a * x + c) % m


seed = 125
# seed = 96
# seed = 50
# seed = 10


gen = gcl(a=25, c=16, m=256, x=seed)

result = []
for i in range(500):
    result.append(next(gen))

unique = set(result)


print("\n")

print("- {} résultats générés par le générateur".format(len(result)))
print(result, end="\n\n")

print("- {} résultats uniques générés".format(len(unique)))
print(unique, end="\n\n")

print("- Motif récurrent")
print(result[:len(unique)])
