import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function openDb(dbName: string) {
  return open({
    filename: `./${dbName}.db`,
    driver: sqlite3.Database
  });
}
