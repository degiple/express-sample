# 動作環境

- node.js v6.14.4
- mysql Ver 14.14 Distrib 5.5.60, for Linux (x86_64) using readline 5.1
- db-creates.sqlが実行されたDB
- DB接続情報は mysqlConnection.js


# MySQLの起動／停止

$ sudo /etc/init.d/mysqld start 
$ sudo /etc/init.d/mysqld stop

# 以下のコマンドでサーバ起動＆修正する度に再起動。(npm i -g nodemon)

$ nodemon node-test


# MYSQL
