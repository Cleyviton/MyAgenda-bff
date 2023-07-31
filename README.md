<h1> My Agenda </h1>

<h2> Como iniciar o Backend </h2>

<h3> Preparação do ambiente <h3>

<p>Antes de tudo, clone o repositório em sua máquina</p>

<p> Em seguida, dentro da pasta raiz do projeto, instale o pacote de <strong>dependências</strong> rodando o seguinte comando no seu terminal:</p>

```shell
utilizando npm: npm install
utilizando yarn: yarn
```

<p>Para criar a conexão com o seu banco de dados, crie um arquivo .env na raiz do projeto como no exempo do arquivo .env.exemple e preencha com os seus dados:</p>

```shell
DATABASE_URL=postgres://<username>:<password>@<host>:<port>/<database>
SECRET_KEY=secretKey
```

<p>Execute as migrações para aplica-las em seu banco de dados rodando o seguinte comando no terminal:</p>

```shell
utilizando npm: npm run typeorm migration:run -- -d ./src/data-source.ts
utilizando yarn: yarn typeorm migration:run -- -d ./src/data-source.ts
```

<h3> Parabéns!! O seu projeto backend está pronto para rodar :) <h3>

<p>Execute o comando a seguir para rodar o projeto:</p>

```shell
utilizando npm: npm run dev
utilizando yarn: yarn dev
```
