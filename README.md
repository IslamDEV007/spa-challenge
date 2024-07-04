# spa-challenge

## このプロジェクトは、様々な日本の都道府県の人口推移を視覚化するNext.jsアプリケーションです。外部APIからデータを取得し、ユーザーのインタラクションのためにチャートとチェックボックスを使用して表示します。

## Installation

IMPORTANT!!! / 重要!!!:
If you are using VSCode, ensure that you have installed the latest version, as an outdated version may cause TypeScript to not work properly.
VSCodeを使用している場合は、最新バージョンがインストールされていることを確認してください。古いバージョンではTypeScriptが正常に動作しない可能性があります。

### Prerequisites / 前提条件

Make sure you have the following software installed on your machine: / 以下のソフトウェアがインストールされていることを確認してください：

- [ts-Node](https://www.npmjs.com/package/ts-node)
- [Node.js](https://nodejs.org/) (version 12.x or later / バージョン12.x以上)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Steps / 手順

1. **Clone the repository: / リポジトリをクローンする：**
   Clone the project repository from GitHub to your local machine using the following command: / 次のコマンドを使用して、GitHubからプロジェクトリポジトリをローカルマシンにクローンします：

   ```bash
   git clone https://github.com/IslamDEV007/spa-challenge.git

   ```

2. **Navigate to the project directory: / プロジェクトディレクトリに移動する：**
   **Change the current directory to the project folder: / プロジェクトフォルダにディレクトリを変更します：**

   ```bash
   cd your-next-project
   ```

3. **Install dependencies: / 依存関係をインストールする：**
   **Install the necessary dependencies using npm or Yarn: / npmまたはYarnを使用して必要な依存関係をインストールします：**

   Using npm: / npmを使用する場合：

   ```bash
   npm install
   ```

   Using Yarn: / Yarnを使用する場合：

   ```bash
   yarn install
   ```

4. **For ESLint and Prettier configuration, refer to the Next.js ESLint documentation and Next.js Prettier documentation/ESLintとPrettierの設定については、Next.jsのESLintドキュメントとNext.jsのPrettierドキュメントを参照してください。**

```bash
  https://nextjs.org/docs/pages/building-your-application/configuring/eslint
```

5. **Set up environment variables: / 環境変数を設定する：**
   **Create a .env.local file in the root of the project and add your environment variables. For example: / プロジェクトのルートに .env.local ファイルを作成し、環境変数を追加します。例えば：**

```bash
NEXT_PUBLIC_API_URL=YOUR-API-KEY
```

Make sure to update these variables with actual values relevant to your project. / これらの変数は、プロジェクトに関連する実際の値に更新してください。

6. **Run the development server: / 開発サーバーを起動する：**
   **Start the development server to run the project locally: / 開発サーバーを起動してプロジェクトをローカルで実行します：**

Using npm: / npmを使用する場合：

```bash
npm run dev
```

Using Yarn: / Yarnを使用する場合：

```bash
yarn dev
```

The application will be available at http://localhost:3000. / アプリケーションは http://localhost:3000 で利用可能になります。

**To run tests: / テストを実行する場合：**

```bash
npm test
```
