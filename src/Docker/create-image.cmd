docker build --no-cache -f SQL\Dockerfile.PostgreSql -t zayavki/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t zayavki/app ../..
