SET NAMES UTF8;
DROP DATABASE IF EXISTS nba;
CREATE DATABASE nba CHARSET=UTF8;

USE nba;

CREATE TABLE nba_index_carousel(
cid INT PRIMARY KEY AUTO_INCREMENT,
img VARCHAR(128),
title VARCHAR(64),
href VARCHAR(128)
) ;
INSERT INTO `nba_index_carousel` VALUES ('9', 'imgs/lunbo/banner1.jpg', '轮播广告商品1', '#');
INSERT INTO `nba_index_carousel` VALUES ('10', 'imgs/lunbo/banner2.jpg', '轮播广告商品2', '#');
INSERT INTO `nba_index_carousel` VALUES ('11', 'imgs/lunbo/banner3.jpg', '轮播广告商品3', '#');
INSERT INTO `nba_index_carousel` VALUES ('12', 'imgs/lunbo/banner4.jpg', '轮播广告商品4', '#');

CREATE TABLE nba_user(
uid INT PRIMARY KEY AUTO_INCREMENT,
uname VARCHAR(32),
upwd VARCHAR(32),
email VARCHAR(64),
img VARCHAR(128)
);
INSERT INTO `nba_user` VALUES ('1', 'pengpeng', '123456', 'pengpeng@qq.com','imgs/bg/1.jpg');
INSERT INTO `nba_user` VALUES ('2', 'junjun', '123456', 'junjun@qq.com','imgs/bg/2.png');
INSERT INTO `nba_user` VALUES ('3', 'huahua', '123456', 'huahua@qq.com','imgs/bg/3.png');

CREATE TABLE t_log(
id INT PRIMARY KEY AUTO_INCREMENT,
uid INT NOT NULL DEFAULT 0,
option VARCHAR(255) NOT NULL DEFAULT '',
optiontime DATETIME NOT NULL DEFAULT 0,
desct VARCHAR(255) NOT NULL DEFAULT ''
);

CREATE TABLE nba_match(
mid INT PRIMARY KEY AUTO_INCREMENT,
img1 VARCHAR(128),
title1 VARCHAR(64),
time VARCHAR(64),
img2 VARCHAR(128),
title2 VARCHAR(64)
) ;
INSERT INTO `nba_match` VALUES ('1', 'imgs/logo/76ers.png', '76人','8:00','imgs/logo/hornets.png','黄蜂');
INSERT INTO `nba_match` VALUES ('2', 'imgs/logo/hawks.png', '老鹰','8:00','imgs/logo/raptors.png','猛龙');
INSERT INTO `nba_match` VALUES ('3', 'imgs/logo/heat.png', '热火','8:00','imgs/logo/wizards.png','奇才');
INSERT INTO `nba_match` VALUES ('4', 'imgs/logo/rockets.png', '火箭','8:00','imgs/logo/thunder.png','雷霆');
INSERT INTO `nba_match` VALUES ('5', 'imgs/logo/nuggets.png', '掘金','8:00','imgs/logo/bulls.png','公牛');
INSERT INTO `nba_match` VALUES ('6', 'imgs/logo/knicks.png', '尼克斯','8:00','imgs/logo/suns.png','太阳');
INSERT INTO `nba_match` VALUES ('7', 'imgs/logo/nets.png', '篮网','8:00','imgs/logo/warriors.png','勇士');

CREATE TABLE nba_team(
tid INT,
title VARCHAR(64),
img VARCHAR(128),
amount1 VARCHAR(64),
amount2 VARCHAR(128),
amount3 VARCHAR(64)
) ;
INSERT INTO `nba_team` VALUES ('01', '猛龙', 'imgs/logo/raptors.png','45','17','0');
INSERT INTO `nba_team` VALUES ('02', '凯尔特人', 'imgs/logo/celtics.png','45','20','1.5');
INSERT INTO `nba_team` VALUES ('03', '骑士', 'imgs/logo/cavaliers.png','37','26','8.5');
INSERT INTO `nba_team` VALUES ('04', '步行者', 'imgs/logo/pacers.png','37','27','9');
INSERT INTO `nba_team` VALUES ('05', '奇才', 'imgs/logo/wizards.png','36','28','10');
INSERT INTO `nba_team` VALUES ('06', '76人', 'imgs/logo/76ers.png','34','28','11');
INSERT INTO `nba_team` VALUES ('07', '热火', 'imgs/logo/heat.png','34','30','12');
INSERT INTO `nba_team` VALUES ('08', '雄鹿', 'imgs/logo/bucks.png','34','30','12');
INSERT INTO `nba_team` VALUES ('09', '活塞', 'imgs/logo/pistons.png','29','35','17');
INSERT INTO `nba_team` VALUES ('10', '黄蜂', 'imgs/logo/hornets.png','28','36','18');
INSERT INTO `nba_team` VALUES ('11', '尼克斯', 'imgs/logo/knicks.png','24','40','22');
INSERT INTO `nba_team` VALUES ('12', '公牛', 'imgs/logo/bulls.png','21','42','24.5');
INSERT INTO `nba_team` VALUES ('13', '篮网', 'imgs/logo/nets.png','20','44','26');
INSERT INTO `nba_team` VALUES ('14', '魔术', 'imgs/logo/magic.png','20','44','26');
INSERT INTO `nba_team` VALUES ('15', '老鹰', 'imgs/logo/hawks.png','20','44','26');

CREATE TABLE nba_team1(
tid INT,
title VARCHAR(64),
img VARCHAR(128),
amount1 VARCHAR(64),
amount2 VARCHAR(128),
amount3 VARCHAR(64)
) ;
INSERT INTO `nba_team1` VALUES ('01', '火箭', 'imgs/logo/rockets.png','50','13','0');
INSERT INTO `nba_team1` VALUES ('02', '勇士', 'imgs/logo/warriors.png','50','14','0.5');
INSERT INTO `nba_team1` VALUES ('03', '开拓者', 'imgs/logo/trail.png','39','26','12');
INSERT INTO `nba_team1` VALUES ('04', '鹈鹕', 'imgs/logo/pelicans.png','37','26','13');
INSERT INTO `nba_team1` VALUES ('05', '马刺', 'imgs/logo/spurs.png','37','27','13.5');
INSERT INTO `nba_team1` VALUES ('06', '森林狼', 'imgs/logo/timber.png','38','28','13.5');
INSERT INTO `nba_team1` VALUES ('07', '雷霆', 'imgs/logo/thunder.png','37','29','14.5');
INSERT INTO `nba_team1` VALUES ('08', '掘金', 'imgs/logo/nuggets.png','35','29','15.5');
INSERT INTO `nba_team1` VALUES ('09', '快船', 'imgs/logo/clippers.png','34','29','16');
INSERT INTO `nba_team1` VALUES ('10', '爵士', 'imgs/logo/jazz.png','34','30','16.5');
INSERT INTO `nba_team1` VALUES ('11', '湖人', 'imgs/logo/lakers.png','28','35','22');
INSERT INTO `nba_team1` VALUES ('12', '国王', 'imgs/logo/kings.png','20','44','30.5');
INSERT INTO `nba_team1` VALUES ('13', '独行侠', 'imgs/logo/mavericks.png','20','45','31');
INSERT INTO `nba_team1` VALUES ('14', '太阳', 'imgs/logo/suns.png','19','47','32.5');
INSERT INTO `nba_team1` VALUES ('15', '灰熊', 'imgs/logo/grizzlies.png','18','45','32');

CREATE TABLE ocean(
oid INT,
title VARCHAR(64),
img VARCHAR(128),
amount1 VARCHAR(64),
amount2 VARCHAR(128),
amount3 VARCHAR(64)
) ;
INSERT INTO `ocean` VALUES ('01', '猛龙', 'imgs/logo/raptors.png','45','17','0');
INSERT INTO `ocean` VALUES ('02', '凯尔特人', 'imgs/logo/celtics.png','45','20','1.5');
INSERT INTO `ocean` VALUES ('03', '76人', 'imgs/logo/76ers.png','34','28','11');
INSERT INTO `ocean` VALUES ('04', '尼克斯', 'imgs/logo/knicks.png','24','40','22');
INSERT INTO `ocean` VALUES ('05', '篮网', 'imgs/logo/nets.png','20','44','26');

CREATE TABLE centre(
cid INT,
title VARCHAR(64),
img VARCHAR(128),
amount1 VARCHAR(64),
amount2 VARCHAR(128),
amount3 VARCHAR(64)
) ;
INSERT INTO `centre` VALUES ('01', '骑士', 'imgs/logo/cavaliers.png','37','26','8.5');
INSERT INTO `centre` VALUES ('02', '步行者', 'imgs/logo/pacers.png','37','27','9');
INSERT INTO `centre` VALUES ('03', '雄鹿', 'imgs/logo/bucks.png','34','30','12');
INSERT INTO `centre` VALUES ('04', '活塞', 'imgs/logo/pistons.png','29','35','17');
INSERT INTO `centre` VALUES ('05', '公牛', 'imgs/logo/bulls.png','21','42','24.5');

CREATE TABLE southeast(
sid INT,
title VARCHAR(64),
img VARCHAR(128),
amount1 VARCHAR(64),
amount2 VARCHAR(128),
amount3 VARCHAR(64)
) ;
INSERT INTO `southeast` VALUES ('01', '奇才', 'imgs/logo/wizards.png','36','28','10');
INSERT INTO `southeast` VALUES ('02', '热火', 'imgs/logo/heat.png','34','30','12');
INSERT INTO `southeast` VALUES ('03', '黄蜂', 'imgs/logo/hornets.png','28','36','18');
INSERT INTO `southeast` VALUES ('04', '魔术', 'imgs/logo/magic.png','20','44','26');
INSERT INTO `southeast` VALUES ('05', '老鹰', 'imgs/logo/hawks.png','20','44','26');
