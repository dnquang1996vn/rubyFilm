# README

#Cach clone tu git
- git clone https://github.com/quangkhovigaitheo/rubyFilm.git
- bundle install
gem uninstall bcrypt
gem install bcrypt --platform=ruby
- đổi tên database.example.yml thành database.yml và config lai dat ten db the nao cung duoc
- rake db:setup
- vao phpmyadmin, vào database vừa được tạo (tên giống trong config/database.yml), drop hết table, import file demo.sql t vừa thêm, Nếu đã migrate trước rồi thì vào database rồi drop hết các bản trừ 2 bảng migration của rails sau đó import file demo.sql
- rails s -> have fun

#cách đặt tên branch git
- devname/feature_name
- vd: quang/create_film

