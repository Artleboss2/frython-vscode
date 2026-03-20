# Frython — Extension VS Code 🐓

Support du langage **Frython** pour Visual Studio Code.

Frython c'est Python, mais en français. Parce que pourquoi pas.

## Installation

1. Telecharger le fichier (disponible dans releases)
2. Ouvrir avec vscode et faire clique droit
3. Puis cliquer sur installer avec .vsix

## Fonctionnalités

- **Coloration syntaxique** pour les fichiers `.fy`
- **Snippets** pour écrire du Frython rapidement
- **Auto-indentation** après `:` comme Python
- **Auto-fermeture** des parenthèses, crochets, accolades

## Snippets disponibles

| Préfixe | Description |
|---------|-------------|
| `aff` | `afficher()` |
| `si` | Bloc si/sinon |
| `def` | Définir une fonction |
| `cls` | Définir une classe |
| `tq` | Boucle tantque |
| `pour` | Boucle pour/dans |
| `ess` | Bloc essayer/sauf |
| `comp` | Compréhension de liste |
| `lam` | Lambda |
| `main` | Garde principale |

## Exemple

```frython
déf fibonacci(n):
    si n <= 1:
        retourner n
    retourner fibonacci(n-1) + fibonacci(n-2)

pour i dans intervalle(10):
    afficher(fibonacci(i))
```

## Installation

Cherche **"Frython"** dans le marketplace VS Code ou installe le langage :

```bash
pip install frython
```

## Liens

- [GitHub](https://github.com/Artleboss2/frython)
- [PyPI](https://pypi.org/project/frython)
