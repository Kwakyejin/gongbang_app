 # 2021 인공지능 학습용 데이터 AI 해커톤
 ## 풋내음 공방 어플리케이션
- **keras tensorflow**를 활용한 제주도 자생식물 인식 및 판단 알고리즘    
- **EfficientV2 모델**을 이용한 알고리즘을 사용한다. 
- 해당 모델을 어플리케이션에 적용, 갤러리에서 가져온 이미지나 촬영한 사진을 `input image`로 넣어 어떤 부위의 어떤 식물 종인지 알 수 있도록 한다. 

![ezgif com-gif-maker](https://user-images.githubusercontent.com/81740134/150679385-a0a86a08-e9c2-4a5e-a2f3-2715a65b770a.gif)

- 프로토 타입 어플리케이션 구동 영상(4배속)

#### 💜 Team KPH
+도움 주신 분: [김도균](https://github.com/jasper200207)(백엔드 서버 구축)
- [박성아](https://github.com/seonga76)(**팀장**, 앱 디자이너, 기획자2) 
- [곽예진](https://github.com/Kwakyejin)(**팀원1**, 앱(프론트엔드) 개발자)
- [황도현](https://github.com/HwangDoHyun28)(**팀원2**, AI(머신 러닝) 개발자, 기획자1, 제품 디자이너)<br>

--------------
## 목차
1. [Problem](#1-Problem)
2. [Solution](#2-Solution)
3. [Why now?](#3-Why-now?)
4. [시장 규모](#4-시장-규모) 
5. [경쟁사](#5-경쟁사)
6. [서비스 시나리오](#6-서비스-시나리오)
7. [사용 기술](#7-사용-기술)
8. [Business Model](#8-Business-Model)
9. [성장](#9-성장)
10. [Financial forecast](#10-Financial-forecast)
11. [대회 피드백](#11-대회-피드백)

-------------------------

## 1. Problem
- 자생 식물 현황<br>
-자생식물의 낮은 인지도<br>
-멸종 위기 자생식물 다수<br>
- 비특색적 기념품<br>
-제주도의 한정되고 변하지 않는 기념품들<br>
-추억이 담긴 특별한 기념품에 대한 소장 욕구 상승<br>


## 2. Solution
- 자생 식물을 이용한 기념품 판매
![image](https://user-images.githubusercontent.com/81740134/150684059-d0e6d5f0-e368-41e2-a7c8-e9df30a8e7c9.png)
- 자생 식물 향수 디자인 시안<br>
-**풋내음 코롱**🌺: 풋내음 공방의 시그니처 향수. 자생식물 '**메밀꽃**'을 활용한 향수로, 은은한 풀과 자연 냄새를 좋아하는 타입에게 적합하다.<br>
-**달달 코롱**🌼: 자생식물 '**큰조롱꽃**'을 이용한 향수로, 달콤한 꽃향기를 좋아하는 타입에게 적합하다.<br>
-**참꽃 코롱**🌸: 자생식물 '**참꽃(진달래)**'을 이용한 향수로, 은은한 꽃향기가 섞인 풀내음을 좋아하는 타입에게 적합하다.<br>
-**아로마 퍼퓸**🌱: 자생식물 '**순비기나무 꽃**'을 이용한 향수로, 허브향과 같은 아로마틱향을 좋아하는 타입에게 적합하다.<br>
![image](https://user-images.githubusercontent.com/81740134/150684524-8ade25d8-0887-445b-9851-a97ca402453f.png)
- 자생 식물 검색 & 자생 식물 향수판매 및 구매 플랫폼'**풋내음 공방**' 구현
- 이미지 검색(상품을 원활하게 판매하는 방안)


## 3. Why now?
- **COVID-19**<br>
-실내에 머무르는 시간 증가<br>
-디퓨져, 캔들 등 향기 제품 시장 규모 확대<br>
-오프라인 시향 금지로 온라인 향수 구입 증가<br>

- **자연친화적 물품**<br>
-'**건강**'에 대한 관심도 증가.<br>
-'**자연친화적인 것**'에 대한 관심도 증가<br>


## 4. 시장 규모
![image](https://user-images.githubusercontent.com/81740134/150682620-a0e547f9-b062-4f24-a01e-fc3edd919fa5.png)


## 5. 경쟁사
![image](https://user-images.githubusercontent.com/81740134/150682792-bc415af3-11a9-45d5-95b6-deb058b6707d.png)

![image](https://user-images.githubusercontent.com/81740134/150682841-179f2eab-ed5b-47b4-a721-1093501aadfd.png)
- **풋내음 공방의 서비스**


## 6. 서비스 시나리오
![image](https://user-images.githubusercontent.com/81740134/150682983-73bb7b17-ae6a-485d-898c-374b6012ceda.png)
![image](https://user-images.githubusercontent.com/81740134/150683069-2f785635-d950-42ed-abfe-5bc1e5685278.png)


## 7. 사용 기술
![image](https://user-images.githubusercontent.com/81740134/150683154-e1195ff5-1d15-4e30-9292-54db408fe51c.png)
- 1. `[꽃, 열매, 잎]`으로 구성된 **3 classes CNN**으로 input된 이미지의 식물 부위를 판단
- 2. 각각 `['메밀', '큰조롱', '순비기나무', '참꽃나무', '황근', '해국', '한라꽃향유']`, `['까마귀쪽나무', '좁은 잎천선과', '구실잣밤나무', '돈나무', '순비기나무', '참가시나무', '황근', '백량금', '꽝꽝나무']`, `['참식나무', '메밀']`과 같이 **7 classes CNN**, **9 classes CNN**, **2 classes CNN**으로 input된 이미지를 세부적인 식물의 종으로 판단<br> 
<br>

![image](https://user-images.githubusercontent.com/81740134/150683234-adbffa05-701a-4118-a864-f6534ff306ec.png)<br>

- **EfficientV2**는 타 모델과 비교해서 학습속도가 빠르고, 적은 수의 패러미터로 타 모델과 유사한 성능을 낼 수 있음


## 8. Business Model
![image](https://user-images.githubusercontent.com/81740134/150683325-048c6d49-069e-43e0-8b9e-a01533642c3e.png)

## 9. 성장
![image](https://user-images.githubusercontent.com/81740134/150683509-25c8255b-1c2b-479a-9c38-e267629a69ad.png)


## 10. Financial forecast
![image](https://user-images.githubusercontent.com/81740134/150683564-51f6f013-b238-4778-9859-73e3024487e1.png)


## 11. 대회 피드백

