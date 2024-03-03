Como fazer um deploy do projeto: 

Após acessar o servidor, dê esses comandos: 

cd /var/www/html/msd-dev/
sudo git clone "https://github.com/wholetomy/allflex.git"
cd allflex
sudo npm i
sudo npm run build
sudo cp -r /var/www/html/msd-dev/allflex/build/* /var/www/html/msd-dev
sudo systemctl restart httpd
