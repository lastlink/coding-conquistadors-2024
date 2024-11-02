# Puppeteer TypeScript Scraper

This project is a web scraper built using Puppeteer and TypeScript. It scrapes data from a specified website and stores the results in an SQLite database.

## Getting Started

### Prerequisites

- Node.js (>=20.0.0)
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/puppeteer-scraper.git
    cd puppeteer-scraper
    ```

2. Install the dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Project Structure

- `src/`: Contains the TypeScript source files.
  - `index.ts`: Main file where the scraping logic is implemented.
  - `database.ts`: Handles the SQLite database connection.

- `tsconfig.json`: TypeScript configuration file.
- `package.json`: Project metadata and dependencies.

### Configuration

Ensure that the `tsconfig.json` is properly configured to compile TypeScript files.

### Usage

1. Compile the TypeScript files:
    ```bash
    npx tsc
    ```

2. Run the scraper:
    ```bash
    npx ts-node src/index.ts
    ```

### Example

The scraper navigates to `https://example.com`, extracts the content of the `<h1>` tag, and stores it in the SQLite database.

### Database

The SQLite database is created in the project root directory as `database.db`. The `scraped_data` table is used to store the scraped data.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request.

### License

This project is licensed under the MIT License.

### Acknowledgements

- Puppeteer
- TypeScript
- SQLite