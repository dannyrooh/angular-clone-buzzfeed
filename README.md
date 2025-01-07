# Clone BuzzFeed

Rxercicio de prática de angular para testes de funcionalidades e aprendizado.

## Técnicas Utilizadas

- Uso de Diretivas: Diretivas Angular são usadas para manipular o DOM. Exemplos incluem *ngIf e *ngFor para controle de fluxo e iteração.
- Importação de Arquivo JSON: O arquivo JSON é importado diretamente no componente para uso dos dados do quiz. Isso é possível devido às configurações resolveJsonModule e allowSyntheticDefaultImports no tsconfig.json.

### Componentes Utilizados
AppComponent: Componente raiz do aplicativo, definido como standalone.

### Arquivo: app.component.ts

Template: app.component.html
Estilo: app.component.css
HomeComponent: Componente de página inicial que inclui o componente de quiz.

### Arquivo: home.component.ts

Template: home.component.html
Estilo: home.component.css
QuizzComponent: Componente de quiz que exibe perguntas e opções, e calcula o resultado.

### Arquivo: quizz.component.ts

Template: quizz.component.html
Estilo: quizz.component.css
Serviços Utilizados

### Configurações Adicionais

Configurações no tsconfig.json:
resolveJsonModule: Permite a importação de arquivos JSON.
allowSyntheticDefaultImports: Permite a importação de módulos sem a necessidade de usar import * as.
Outras Técnicas
