# Create target dir, if required
mkdir -p out

cp src/html/* out/
lessc src/less/style.less out/css/style.css
