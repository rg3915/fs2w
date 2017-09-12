# Instalação

## Como instalar o Python

Para instalar o Python siga o tutorial das [PyLadies](https://github.com/PyLadiesSP/Cursos/blob/master/Slides_InstallPython_v2.pdf).


## Criando um virtualenv

Para criar um virtualenv no Python 3 digite:

```
python3 -m venv myvenv
```

Se der algum erro tente com

```
virtualenv -p python3 myvenv
```


## Como instalar o Django

```
pip install django
```

### Instalando tudo com requirements.txt

```
pip install -r requirements.txt
```


## Como instalar o Django offline

Crie uma pasta com o nome `django_off`.

```
mkdir django_off
cd django_off
```

Para baixar os pacotes e salvar na pasta "django_off" digite

```
pip download --dest django_off/ -r requirements.txt
```

Para instalar

```
pip install --no-index --find-links=file:django_off/ -r requirements.txt
```