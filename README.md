# :computer: Extração de áudio em vídeos :musical_score:

Criando projeto para extrair o áudio de vídeos

Este projeto foca no uso de Nodejs para extrair áudio de vídeos. 

## Motivação:

Devido à necessidade de extrair áudio de vídeos do YouTube, optou-se por estudar/procurar uma forma de utilizar o node para fazer esta tarefa.

## Explicação: 

Para esse projeto é necessario a utilização de ``` @ffmpeg-installer/ffmpeg ``` e ``` fluent-ffmpeg ``` para fazer a tarefa de extração. Para estabelecer as conexões e fazer todas as funcionalidades executar ``` node ``` e para fazer alocação dos arquivo em outras pastar foi selecionado a ``` multer ```.

Para começar, é criada uma constante que conterá a port/porta do node. Em seguida, o express é executado para iniciar o "servidor" que conterá todo o sistema. Para gerenciar o "salvar" da extração, utiliza-se ``` multer.diskStorage ```, a configuração consiste em determinar em qual pasta o vídeo será alocado e alterar o nome do arquivo.

A rota "/convert" é responsável por receber o vídeo que o usuário envia, salvá-lo na pasta tmp e depois utilizar a função ffmeg para realizar o serviço de "extração". Obviamente, a função de conversão deve ser alimentada com as informações do diretório, nome do arquivo que o usuário enviou, formato e o diretório a ser salvo.