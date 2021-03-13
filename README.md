# [TESTE AQUI!](https://app.jhonnatanmesquita.com.br/djzao/)

# Ideia

O projeto inicialmente consiste em uma aplicação que cria uma playlist de vídeos do youtube. <br>
- A solução é melhor que as próprias playlists do youtube devido ao fato de ser uma incorporação/iframe, com isso os vídeos executados na aplicação não irão possuir propagandas de vídeos. <br>
- Além disso, a própria playlist do youtube diferentemente da aplicação, não atualiza a lista de vídeos em real-time. (ex: uma playlist pública do youtube rodando um video qualquer, se outro usuario adicionar um vídeo a essa playlist ela não atualizará o repertório imediatamente, somente quando a página 'atulizar' ou outro video for executado). <br>

	
## Funcionalidades

- Para inserir um vídeo, basca colar o URL do vídeo do youtube no input da página. (Todos os formatos da URL do youtube são aceitos) <br>
- Vídeos sem Anúncios em vídeo puláveis :D
- Ao término do vídeo, o vídeo em execução é removido da playlist e o próximo é iniciado.
- A aplicação é 'multi-usuário', se a aplicação estiver sendo executada em um PC e outro usuário no celular ou outro PC alterar alguma coisa na playlist, isso afetará todos os 'usuários' em real-time.
- É possível remover qualquer vídeo da playlist, se o video em execução for removido o próximo vídeo da playlist será executado.
- [REMOVIDO] Selecionar vídeo ao clicar em qualquer vídeo listado na playlist.

## Observação

O projeto possuí integração com Firebase, você terá que ter uma conta Firebase e também terá que criar uma 'RealTime Database'. <br>
- Após acessar sua conta Firebase e criar sua Realtime Database você terá que acessar o link: https://console.firebase.google.com/project/{NOME_DO_SEU_PROJETO_AQUI}/settings/general/ (atente-se em mudar o {NOME_DO_SEU_PROJETO_AQUI} para o nome do seu projeto sem as chaves {}) <br>
- Ao final dessa página há a seção: 'Firebase SDK snippet', nela você terá que clicar em configuração e copiar o conteúdo que será apresntado. <br>
- Cópie o conteúdo de configurações e cole no arquivo '../src/FireBase.js' substituindo a 'const firebaseConfig' do arquivo.
- Após concluir isso, o projeto estará pronto para ser executado.

## Créditos

Este projeto foi criado com [Create React App](https://github.com/facebook/create-react-app) <br>
E foi 'forkeado' de: [modern-react-redux](https://github.com/anarsultani97/modern-react-redux)

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Executa o aplicativo no modo de desenvolvimento.<br>
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

A página será recarregada se você fizer edições.<br>
Você também verá quaisquer erros de 'lint' no console.

### `npm test`

Inicia o 'test runner' em modo de exibição interativa.<br>
Veja a seção sobre [running tests](https://facebook.github.io/create-react-app/docs/running-tests) para maiores informações.

### `npm run build`

Compila o aplicativo para produção para a pasta `build`.<br>
Ele agrupa corretamente o React no modo de produção e otimiza o build para obter o melhor desempenho.

A compilação é reduzida e os nomes dos arquivos incluem os hashes.<br>
Seu aplicativo está pronto para ser implantado!

Veja a seção sobre [deployment](https://facebook.github.io/create-react-app/docs/deployment) para maiores informações.
