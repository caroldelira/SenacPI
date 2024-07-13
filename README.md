# LISTOU

## Desenvolvedor: Afonso Lima (Desenvolvedor Web e Mobile)

## Contato: <https://github.com/afonsolimajr>

## Desenvolvedor: Willian Valentim (DevSecOps)

## Contato: <https://github.com/w4lentim>

## Desenvolvedora: Ana Carolina Bezerra de Lira Vasconcelos (Desenvolvedora Front-End e UX/UI)

## Contato: <https://github.com/caroldelira>

## Desenvolvedor: Paulo Fernando Oliveira Lins

## Contato: <https://github.com/pauloemc2> (Desenvolvedor Python)

Desenvolvimento Front-end para o projeto nomeado "listou".

### Descrição e proposta do listou:
O projeto Listou tem como objetivo, ser um aplicativo para dispositivos móveis com o intuito de realizar
listagens, consultas e auxiliar seus clientes na organização de suas compras e na economia financeira.

### Créditos do Projeto
Todo o estudo de UX e a parte inicial de UI do Projeto Listou foi desenvolvido em grupo na mentoria do Design Lab promovida pela equipe do Guia UX Design.
Onde participaram os Designers:

## Ana Carolina Vasconcelos <https://www.linkedin.com/in/ana-carolina-vasconcelos-510739183/>
## Italo Bomfim <https://www.linkedin.com/in/italo-bomfim-412590250/>
## Luiz Soares Junior <https://www.linkedin.com/in/luiz-soares-junior/>
## Naila Lorena Correia <https://www.linkedin.com/in/nailalorenacorreia/>
## Tâmara Cedraz <https://www.linkedin.com/in/tamaracedraz/>

## Mentor - Felipe Leite <https://www.linkedin.com/in/felbart/>

Nós como estudo do Projeto final do curso de Análise e Desenvolvimento de Sistemas do Senac, desenvolvemos um protótipo navegável desse projeto, finalizamos as telas e incluímos toda a parte de front-end e back-end. 

### Processo de desenvolvimento do aplicativo:
- [ ] 1. Construção da API Base;
- [ ] 2. Publicação do Projeto na Vercel;
- [ ] 3. Desenvolvimento das Funcionalidades;
- [ ] 4. Integração com Firebase;
- [ ] 5. Testes Locais e Inserção de Dados;
- [ ] 6. Validação e Busca de Dados via API;
- [ ] 7. Implementação da Autenticação de Rotas;

## Ferramentas utilizadas no desenvolvimento Front-End do listou:
- 1. React Native: Framework para o desenvolvimento de aplicativos móveis multiplataforma;
- 2. Firebase: Plataforma de desenvolvimento de aplicativos móveis e web, utilizada para autenticação de usuários e armazenamento de dados em tempo real;
- 3. API REST: Desenvolvida em Nest.js, fornece os serviços necessários para o aplicativo, como criação, edição e exclusão de listas de compras.

## COMO GERAR UM NOVO APK

- executar o comando no terminal que ira enviar os arquivos para plataforma do expo e ira fazer o build do APK na nuvem

**eas build --platform android**

## COMO GERAR UM NOVO UPDATE DA VERSAO ATUAL DO APK:

1.  trocar o numero da versao do update no arquivo **app.json**:

    {

        {
            "expo": {
                "update": "YYMMDD.n",
            }
        }

    }

    obs.: apenas para padronizar foi adotada a seguinte mascara:

    YYMMDD.n

    YY = ano atual com dois digitos

    MM = mes atual com dois digitos

    DD = dia atual com dois digitos

    n = o numero da alteracao no dia podendo começar com zero

2.  executar o comando no terminal para enviar o update para producao:

    **eas update --branch production --message "update 240223.2" --platform android**
