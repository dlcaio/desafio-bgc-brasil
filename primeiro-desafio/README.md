# API REST

Uma API é uma interface de comunicação entre programas que utiliza um conjunto de regras próprias. No caso das APIs REST, essa comunicação ocorre seguindo o modelo cliente servidor, onde um cliente envia requisições HTTP (em geral) a um servidor e recebe uma resposta. APIs REST são stateless: não guardam o estado da comunicação, e cada requisição deve ser suficiente para interagir com os recursos desejados. As APIs REST disponibizam recursos, em geral em URLs, chamadas endpoints. Os formatos de apresentação dos dados mais comuns são XML e JSON.

# React

React é um framework frontend em javascript que serve pra criar interfaces interativas de usuário. Ele é baseado em componentes, o que tende a deixar o código mais reaproveitável e organizado. Apesar disso, muitos desenvolvedores alegam que sua documentação não consegue acompanhar as atualizações do framework.

# Redux

O redux é um gerenciador isolado de estados em aplicações. Ele é útil pra se ter uma fonte confiável do estado dos dados de uma aplicação, o que é especialmente bom em aplicações grandes ou complexas, onde acompanhar a mudanças de todos os estados se torna mais difícil. Apesar dessas vantagens, o redux exige muito código: há muitos componentes envolvidos no processo de gerenciamento de estados do redux, algo que pode dificultar que seja amplamente adotado. Além disso, o redux não é capaz de lidar com ações que causam efeitos colaterais.

# Redux Saga

O Redux Saga é uma bilbioteca particular do redux, que serve pra lidar de forma fácil e gerenciável com efeitos colaterais, como chamadas assíncronas a APIs, acesso ao cache do navegador, etc.


# Serverless Framework

É um framework que tem como objetivo facilitar o processo de desenvolvimento de aplicações serverless. Por meio de sua CLI, o Serverless Framework oferece templates de funções serverless, integração mais fácil com os provedores de nuvem (onde as aplicações serverless rodam), além de ter uma comunidade interessante ao redor do tema de aplicações serverless.

# AWS API Gateway

É um serviço da AWS que fornece o gerenciamento completo de APIs REST, HTTP, e websocket, automatizando o processo de criação, manutenção, publicação, monitoramento e segurança em APIs. Muito escalável, consegue processar muitas requisições a uma API de forma simultânea.

# AWS Lambda

É um serviço da AWS que fornece execução de código em resposta a eventos - como requisições HTTP, alterações no banco de dados - e com o qual o desenvolvedor não precisa se preocupar com a configuração do servidor ou escalabilidade, já que a AWS é responsável por alocar recursos para garantir que a aplicação funcione. Além disso, não há desperdício por recursos ociosos, já que a cobrança é feita quando o código é executado

# AWS Step Functions

AWS Step Functions é um serviço aws que tem como objetivo orquestrar e sequenciar funções lambda e outros serviços aws, fazendo com que cada passo da aplicação sirva possa servir de input para o próximo. Serve também pra facilitar a administração também de retries, depurar falhas.

# AWS DynamoDB

O DynamoDB é um banco de dados NoSQL - não utiliza tabelas relacionais - totalmente gerenciado pela AWS, muito rápido, altamente disponível e escalável. Por ser um banco de dados nosql, não é recomendado para realizar queries complexas, e não pode fazer joins.

# AWS RDS

Serviço de banco de dados relacional, escalável, seguro, compatível com vários SGBDs populares. com o RDS, o usuário não precisa se preocupar com atualizações de softwares do banco de dados, backups, detecção de falhas e recuperação de dados. Tudo isso é gerenciado pela AWS.

# AWS Kinesis

O AWS Kinesis é um serviço da AWS que promete coletar e processar grandes streams de dados em tempo real. 

# AWS S3

O AWS S3 é um serviço para armazenamento de arquivos na AWS, que tem foco em disponibilidade, escalabilidade, segurança, e performance. O S3 também é um serviço de armazenamento de baixo custo e, por isso, pode ser utilizado pra armazenar grandes quantidades de dados, como arquivos de log.
Também é muito utilizado pra armazenar arquivos de aplicações web, como fotos enviadas por um usuário. Ele pode ainda hospedar aplicações web estáticas.

# AWS Cognito

O AWS Cognito é um serviço da que tem por objetivo facilitar a implementação de autenticação, autorização, e o gerenciamento de usuários de aplicações web e mobile. O cognito tem dois componentes centrais: a User Pool - responsável por autenticar usuários e fornercer-lhes crefencias de acesso à aplicação - e a Identity Pool, que possibilita que usuários autenticados possam receber credenciais AWS específicas para utilizar outros serviços AWS utilizados pela aplicação.

# AWS CloudWatch

O AWS CloudWatch é um serviço de monitoramento centralizado de recursos da AWS. Com ele, o desenvolvedor consegue em um só lugar ter acesso a dados relacionados aos recursos AWS, como métricas e logs. Além disso, é possível configurar o CloudWatch pra responder a determinados eventos envolvendo esses dados relacionados aos serviços e, por exemplo, interromper a execução de uma instância EC2.

# AWS CloudFormation

O AWS CloudFormation é um serviço que permite que o desenvolvedor aloque seus recursos AWS utilizando código. Dessa forma, o desenvolvedor consegue com apenas um arquivo provisionar toda a sua infraestrutura de nuvem necessária, ao invés de precisar configurar por outras formas menos práticas, como no console da AWS. Além disso, ele pode reutilizar esse código em outros contextos caso seja necessário.

























