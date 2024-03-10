# LISTOU - PROJETO INTEGRADOR SENAC

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
