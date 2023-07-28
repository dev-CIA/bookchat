import React from 'react';
import { Button, Paper, TextInput, Title, Text, Flex, Space, Box, Container } from '@mantine/core';
import { WEATHER, MOOD } from '../../constants';
import { Selector } from '.';

const mockData = [
  {
    title: '시선으로부터, (정세랑 장편소설)',
    rate: 4.5,
    link: 'https://search.shopping.naver.com/book/catalog/32454975970',
    image: 'https://shopping-phinf.pstatic.net/main_3245497/32454975970.20230110165450.jpg',
    author: '정세랑',
    discount: '12600',
    publisher: '문학동네',
    pubdate: '20200605',
    isbn: '9788954672214',
    description:
      '“이 소설은 무엇보다 20세기를 살아낸 여자들에게 바치는 21세기의 사랑이다.”\n  한국문학이 당도한 올곧은 따스함, 정세랑 신작 장편소설\n\n독창적인 목소리와 세계관으로 구축한 SF소설부터 우리 시대의 현실에 단단히 발 딛고 나아가는 이야기들까지, 폭넓은 작품 세계로 우리에게 늘 새로운 놀라움을 선사했던 정세랑. 작가의 동명 소설을 원작으로 제작되는 넷플릭스 드라마 〈보건교사 안은영〉(이경미 감독, 정유미 주연)과, SM에서 제작중인 케이팝 드라마 〈일루미네이션〉의 각본을 집필하며 활동 반경을 넓혀가고 있는 그가 장편소설 『시선으로부터,』로 돌아왔다. 『시선으로부터,』는 구상부터 완성까지 5년이 걸린 대작으로, 한국일보문학상을 수상한 『피프티 피플』 이후 4년 만에 내놓는 신작 장편소설이다. 『시선으로부터,』는 올해 3월 오픈한 웹진 〈주간 문학동네〉에서 3개월간 연재되었으며, 〈주간 문학동네〉 연재 후 출간되는 첫 소설이기도 하다. \n\n이 소설은 시대의 폭력과 억압 앞에서 순종하지 않았던 심시선과 그에게서 모계로 이어지는 여성 중심의 삼대 이야기이다. 한국전쟁의 비극을 겪고 새로운 삶을 찾아 떠난 심시선과, 20세기의 막바지를 살아낸 시선의 딸 명혜, 명은, 그리고 21세기를 살아가고 있는 손녀 화수와 우윤. 심시선에게서 뻗어나온 여성들의 삶은 우리에게 가능한 새로운 시대의 모습을 보여준다. 협력업체 사장이 자행한 테러에 움츠러들었던 화수는 세상의 일그러지고 오염된 면을 설명할 언어를 찾고자 한다. 해림은 친구에게 가해진 인종차별 발언에 대신 화를 내다가 괴롭힘을 당했지만 후회하거나 굴하지 않는다. 경아는 무난한 자질을 가지고도 오래 견디는 여성이 있다는 걸 보여주면서 뒤따라오는 여성들에게 힘을 주고자 한다.',
  },
  {
    title: '[큰글자책] 시선으로부터, (정세랑 장편소설)',
    rate: 4.5,
    link: 'https://search.shopping.naver.com/book/catalog/32466688682',
    image: 'https://shopping-phinf.pstatic.net/main_3246668/32466688682.20230722071017.jpg',
    author: '정세랑',
    discount: '18000',
    publisher: '문학동네',
    pubdate: '20210508',
    isbn: '9788954679251',
    description:
      '2020년 가장 많은 시선을 모은 문학 작품에 대해서 이야기하라면 &lt;시선으로부터,&gt;를 빼놓을 수 없을 것이다. &lt;시선으로부터,&gt;는 예악판매 기간 중 종합 베스트셀러 1위(알라딘)에 올랐으며 출간 즉시 교보문고, 예스24, 알라딘 등 주요 서점에서 종합 베스트셀러 1위를 차지했고, 문학사에 남을 독창적인 인물 심시선 여사를 통해 모계사회에 대한 희망적인 전망을 제시하며 문화계 전반에 신선한 바람을 일으켰다. \n\n\n\n소설 속 한 문장이 특정 사건과 관련하여 KBS 뉴스에 인용되며 사회적으로 큰 반향을 불러오기도 함으로써, 현실을 대변하는 또다른 언어로서의 문학 작품의 파급력을 몸소 보여주기도 했다. 이경미 감독이 연출하고 정유미, 남주혁 배우가 주연한 넷플릭스의 화제작 [보건교사 안은영]의 원작자이자 각본가로도 바쁜 한 해를 보낸 정세랑 작가는, &lt;시선으로부터,&gt;가 각종 조사에서 올해의 책으로 선정되며 현재 대중과 문학계에서 가장 큰 사랑을 받는 작가임을 증명했다.\n\n\n\n한국과 미국에 나뉘어 살고 있는 한 가족이 단 한 번뿐인 제사를 지내기 위해 하와이로 떠난다는 다소 엉뚱한 상황에서 출발하는 &lt;시선으로부터,&gt;는, 현대사의 비극과 이 시대 여성에게 가해지는 폭력, 세계의 부조리를 관통하며 나아간다. 미술가이자 작가이며 시대를 앞서간 어른이었던 심시선. 그녀가 두 번의 결혼으로 만들어낸 이 독특한 가계의 구성원들은 하와이에서 그녀를 기리며 각자 자신만의 방식으로 성장해나간다. \n\n\n\n정세랑이 ‘작가의 말’에서 “이 소설은 무엇보다 20세기를 살아낸 여자들에게 바치는 21세기의 사랑이다”라고 밝힌 것처럼, &lt;시선으로부터,&gt;는 한 시대의 여성들에 대한 올곧고 따스한 시선으로부터 비롯된 작품이다. 데뷔 10년, 장르를 넘나들며 다양한 방식으로 이야기를 펼쳐내면서도 우리를 단 한 번도 실망시킨 적이 없는 그가, 사랑스러운 소설을 쓰는 작가에서 이제는 사랑을 행사하는 작가가 되어 우리에게 돌아왔다.',
  },
  {
    title: '우리는 사랑일까 (개정판)',
    rate: 4,
    link: 'https://search.shopping.naver.com/book/catalog/32455937983',
    image: 'https://shopping-phinf.pstatic.net/main_3245593/32455937983.20221230071412.jpg',
    author: '알랭 드 보통',
    discount: '12600',
    publisher: '은행나무',
    pubdate: '20110310',
    isbn: '9788956601373',
    description:
      "남녀 간의 연애심리를 독특하게 분석한 지적인 연애소설!\n\n연애의 진행과정을 담아낸 알랭 드 보통의 지적인 연애소설 『우리는 사랑일까』. 《왜 나는 너를 사랑하는가》와 《너를 사랑한다는 건》에 이은 '사랑과 인간관계 3부작'의 하나로, 3부작 중에서 여주인공의 시선으로 그려진 유일한 책이다. 20대 중반의 커리어우먼 앨리스가 꿈꾸는 낭만적 사랑과 그녀의 남자친구 에릭 사이에서 벌어지는 아슬아슬한 사건들을 통해 이상적 사랑이 어떻게 현실 속에서 성숙한 사랑으로 완성되어가는지를 보여준다. 연애의 탄생에서 성장, 그리고 결실까지를 작가 특유의 현학적 분석과 세밀한 심리 묘사로 흥미진진하게 펼쳐놓는다.",
  },
  {
    title: '우리는 정말 사랑일까',
    rate: 3.5,
    link: 'https://search.shopping.naver.com/book/catalog/32492653031',
    image: 'https://shopping-phinf.pstatic.net/main_3249265/32492653031.20220527032849.jpg',
    author: '김종오',
    discount: '11700',
    publisher: '이다북스',
    pubdate: '20140315',
    isbn: '9791195213009',
    description:
      '《우리는, 정말 사랑일까》는 저자는 블로그 글들 중 많은 호응을 받았지만 미처 소개하지 못했고, 연애 시기별로 절실한 문제들을 정리했다. 여기에 블로그에 싣지 않은 이야기들을 새로 추가해, 사랑의 시작부터 이별까지, 솔로에서 새로운 시작까지 한눈에 헤아릴 수 있도록 했다.',
  },
  {
    title: '우리는 언제나 서로의 행복이야 (슈야 토야의 소소하고 행복한 일상)',
    rate: 3.5,
    link: 'https://search.shopping.naver.com/book/catalog/41120988621',
    image: 'https://shopping-phinf.pstatic.net/main_4112098/41120988621.20230712072344.jpg',
    author: '대원앤북 편집부 지음',
    discount: '14400',
    publisher: '대원앤북',
    pubdate: '20230715',
    isbn: '9791170621287',
    description:
      '카카오톡 인기 이모티콘! \n인스타그램 28만 팔로워에게 \n사랑받는 슈야의 첫 번째 일상툰 출간!\n\n*초판한정 씰스티커 증정!\n*미공개 특별편 수록!\n\n언제나 행복한 토끼 슈야와, 늘 함께하는 \n든든한 토야의 소소하고 행복한 일상!\n\n“우리, 서로의 행복이 되어 주자.”\n\n이 이야기는 슈야와 토야, 귀여운 두 마리 토끼들의 이야기입니다.\n동시에 세상의 모든 슈야와 토야의 이야기이기도 합니다.\n슈야와 토야는 기쁠 때나 슬플 때나, 항상 아껴주고 사랑해 주는\n소중한 짝꿍이지요. 둘의 이야기는 일상에서 벌어지는 소소한 이야기이지만,\n함께이기에 더욱 특별합니다. 이 이야기를 읽는 여러분도 소중한 연인과 함께\n특별한 일상을 만들어 보세요!',
  },
  {
    title: '우리는 모두 죽는다는 것을 기억하라 (삶의 다른 방식을 찾고 있는 당신에게)',
    rate: 3,
    link: 'https://search.shopping.naver.com/book/catalog/32486411750',
    image: 'https://shopping-phinf.pstatic.net/main_3248641/32486411750.20230606085903.jpg',
    author: '웨인 다이어',
    discount: '15300',
    publisher: '토네이도',
    pubdate: '20191118',
    isbn: '9791158511586',
    description:
      '언제나 우리 눈앞에, 코앞에, 발밑에 있는 죽음을 기억하라!\n\n타인의 시선에서 벗어나 자신의 삶을 사는 법을 전파했던 《행복한 이기주의자》로 지금 이 순간에도 수많은 사람들의 삶을 바꾸고 있는 웨인 다이어 박사의 『우리는 모두 죽는다는 것을 기억하라』. 우리 시대 가장 위대한 동기부여 전문가이자 심리학자, 영성가로 평가받으며 지혜롭고 통찰 깊은 삶을 살다 간 저자가 세상에 마지막으로 남기고 간 작품으로, 삶의 현자들로 불리는 작가, 철학자, 영성가, 명성가 등등 다양한 인물들의 뜨거운 목소리가 담겨 있다.\n\n저자는 우리는 언제나 영원히 살 것처럼 일하고, 영원히 살 것처럼 고민하고, 영원히 살 것처럼 불안해하고 두려워하지만 언제나 죽음은 우리 코앞에 있다고 이야기하며, 우리에게 그 사실을 일깨워 우리의 삶을 ‘영원히’에서 ‘지금 당장’으로 변화시키고자 한다. 이 책에 담긴 삶의 다른 답, 다른 방식을 찾아낸 사람들의 따뜻하고 유쾌한 이야기를 통해 나 자신을 투명하게 바라보며 분노, 죄책감, 돈과 명예에 대한 욕망으로부터 자유로워지고, 마침내 삶의 다른 방식을 찾은 나 자신을 발견하게 될 것이다.',
  },
  {
    title: '우리는 에코 히어로! 4권 세트',
    rate: 3,
    link: 'https://search.shopping.naver.com/book/catalog/40342140620',
    image: 'https://shopping-phinf.pstatic.net/main_4034214/40342140620.20230614072206.jpg',
    author: '플로렌스 어커트',
    discount: '47880',
    publisher: '나무말미',
    pubdate: '20230601',
    isbn: '9791191827231',
    description:
      '처음 시작하는 환경 교육 시리즈 “우리는 에코 히어로!”\n환경 문제를 공감하고 긍정적인 환경 감수성을 형성하는 환경 논픽션 그림책\n집에서 시작하고, 자연과 함께, 동네에서 함께, 여기저기 다니면서 실천하는 우리는 에코 히어로!\n\n세계 여러 나라에서 갑작스러운 더위나 추위, 너무 많은 비나 눈이 오는 날이 점점 늘어나고 있습니다. 환경 오염, 생태계 파괴, 기후 변화 등 다양한 환경 문제가 등장하면서 지구의 기후와 환경이 변하고 있는 것입니다. 그러다 보니 환경에 대한 관심이 높아지고, 환경 교육의 중요성이 부각되고 있습니다. 특히 환경 교육을 통해 환경 감수성을 키우는 것에 대한 중요성이 높아지고 있습니다. \n\n어릴 때부터 자연스럽게 나와 가까운 환경에서의 환경 문제와 에너지 문제를 인식하고, 생물 및 자연과 공유하는 환경에 대해 존중하는 태도를 형성한다면, 우리 아이들의 환경 감수성을 높이고 환경을 소중히 여기는 책임 있는 사람으로 성장하게 할 것입니다. \n\n『우리는 에코 히어로!』  시리즈는 나와 가까운 환경부터 점차 확대된 환경 속에서의 환경 문제와 문제 해결을 위한 방법을 소개합니다. 밝고 생생한 색감의 그림을 통해 환경 문제와 이것을 해결하기 위해 우리가 할 수 있는 방법을 상세하게 설명하여 아이들이 평생 동안 ‘에코 히어로’가 될 수 있도록 안내합니다. \n\n『우리는 에코 히어로!』 시리즈의 첫 번째 책인 《우리는 에코 히어로! 집에서 시작하기》는 가정에서 에너지와 물을 사용하는 방법과 쓰레기를 줄이고, 재사용하고, 재활용하는 것이 왜 중요한지 살펴봅니다. 두 번째 책인 《우리는 에코 히어로! 자연과 함께하기》는 우리가 사는 지구와 자연 환경을 이해하고 식물을 키우고 야생 동물을 돕는 것부터 쓰레기를 집으로 가져가는 것이 왜 중요한지 이해하며, 우리가 자연 속의 일부로서 환경을 돌보는 방법을 살펴봅니다. 세 번째 책인 《우리는 에코 히어로! 동네에서 함께하기》는 우리 동네는 우리가 이웃들과 함께 살아가는 터전임을 이해하고, 학교와 지역 사회에서 우리가 에너지 사용을 줄이고, 쓰레기를 줄이고, 재사용하고, 재활용할 수 있는지 살펴봅니다. 네 번째 책인 《우리는 에코 히어로! 여기저기 다니면서》는 우리가 여행할 때 에너지를 사용하는 방법과 화석 연료, 친환경 쇼핑 등의 이슈를 살펴봅니다.',
  },
  {
    title: '우리는 언제나 다시 만나',
    rate: 3.5,
    link: 'https://search.shopping.naver.com/book/catalog/32455538744',
    image: 'https://shopping-phinf.pstatic.net/main_3245553/32455538744.20230718122241.jpg',
    author: '윤여림',
    discount: '10800',
    publisher: '위즈덤하우스',
    pubdate: '20170720',
    isbn: '9788962478518',
    description:
      '사랑하는 나의 아이야, 우리는 언제나 다시 만나!\n\n감동적인 한 통의 편지 같은 아름다운 윤여림 작가의 글과 《수박 수영장》의 안녕달 작가의 따뜻하고 정겨운 그림이 빚어낸 그림책 『우리는 언제나 다시 만나』. 아이가 성장하면서 겪는 자연스러운 과정, ‘분리 불안’에 대한 이야기를 담은 가슴 따뜻한 그림책입니다. 엄마가 사라지면 아이가 울면서 불안함을 표현하는 것을 ‘분리 불안’이라고 합니다. 아이마다 시기나 정도의 차이는 있지만, 대부분 2~3세 때 엄마에 대한 애착이 무척 강했다가 차츰 나아져서 친구와도 어울리고, 유치원에도 다니게 됩니다.\n\n부모의 보살핌이 절대적으로 필요한 영유아기를 지나면, 아이는 차츰 자기주도성이 생기고 혼자 하는 일들이 많아집니다. 또 청소년기를 지나면 아이의 독립성은 더욱 커지고, 오롯이 한 인간으로 독립하는 순간도 찾아옵니다. 오히려 그 과정에서 아이에게 절대적 사랑을 퍼붓던 부모는 조금씩 서운함과 허전함을 느끼게 되는데, 이때 아이뿐 아니라 부모도 성장합니다. 아이가 한 뼘 자라면, 부모도 한 뼘 자라게 되지요.\n\n지금 끊임없이 엄마를 찾는 유아기 아이의 엄마뿐 아니라, 앞으로 태어날 아이를 기다리는 예비 엄마, 어느덧 아이가 자라서 곧 떠나보내야 할 청소년기 아이의 엄마까지 모든 엄마가 사랑하는 아이에게 들려주고 싶은 따뜻한 사랑과 힘찬 응원을 담은 이 책은 아이와 부모 모두 건강하게 분리 불안을 극복하고 서로 자유롭게 사는 모습을 보여주면서, 아이와 부모의 행복하고 아름다운 성장을 응원합니다.',
  },
  {
    title: '우리는 모두 달라요 (인종에 관한 첫 번째 대화)',
    rate: 2.5,
    link: 'https://search.shopping.naver.com/book/catalog/35911952619',
    image: 'https://shopping-phinf.pstatic.net/main_3591195/35911952619.20230516164322.jpg',
    author: '메건 매디슨^제시카 랠리',
    discount: '11700',
    publisher: '토토북',
    pubdate: '20221122',
    isbn: '9788964964828',
    description:
      '그림책으로 시작하는 세계 시민 교육\n인종에 관한 첫 번째 대화\n\n흑인은 누구나 운동을 잘할까?\n백인은 누구나 영어를 잘할까?\n피부색만으로 어떤 사람인지 알 수 있을까?\n\n《우리는 모두 달라요》는 자신과 피부색이 다른 사람에게 호기심을 갖기 시작하는 어린이들에게 인종에 관해서 이해하기 쉽게 알려 주는 그림책입니다. 단순하고 다채로운 그림, 정확하고 쉬운 문장으로 어린이 독자가 자신과 다른 사람을 존중하는 세계 시민으로 자랄 수 있도록 이끌어 줘요. 피부색이 다른 이유, 인종의 개념, 사람의 정체성을 나타내는 다양한 용어, 부당한 인종 차별에 반대하는 목소리를 내고 세상을 변화시키는 일에 참여하는 방법까지 어린이들의 눈높이에 꼭 맞게 알려 줍니다. 아이들과 어른들이 어떻게 대화를 나누면 좋을지 안내하는 보호자 가이드도 책 말미에 수록했습니다.',
  },
  {
    title: '우리는 에코 히어로! 1: 집에서 시작하기',
    rate: 4,
    link: 'https://search.shopping.naver.com/book/catalog/40342157618',
    image: 'https://shopping-phinf.pstatic.net/main_4034215/40342157618.20230606085700.jpg',
    author: '플로렌스 어커트',
    discount: '12600',
    publisher: '나무말미',
    pubdate: '20230601',
    isbn: '9791191827248',
    description:
      '처음 시작하는 환경 교육 시리즈 “우리는 에코 히어로!”\n환경 문제를 공감하고 긍정적인 환경 감수성을 형성하는 환경 논픽션 그림책\n집에서 시작하고, 자연과 함께, 동네에서 함께, 여기저기 다니면서 실천하는 우리는 에코 히어로!\n환경 문제를 해결하기 위해 집에서 할 수 있는 일을 알아 보고 실천하는 ‘에코 히어로’가 되자!\n\n세계 여러 나라에서 갑작스러운 더위나 추위, 너무 많은 비나 눈이 오는 날이 점점 늘어나고 있습니다. 환경 오염, 생태계 파괴, 기후 변화 등 다양한 환경 문제가 등장하면서 지구의 기후와 환경이 변하고 있는 것입니다. 그러다 보니 환경에 대한 관심이 높아지고, 환경 교육의 중요성이 부각되고 있습니다. 특히 환경 교육을 통해 환경 감수성을 키우는 것에 대한 중요성이 높아지고 있습니다. \n어릴 때부터 자연스럽게 나와 가까운 환경에서의 환경 문제와 에너지 문제를 인식하고, 생물 및 자연과 공유하는 환경에 대해 존중하는 태도를 형성한다면, 우리 아이들의 환경 감수성을 높이고 환경을 소중히 여기는 책임 있는 사람으로 성장하게 할 것입니다. \n《우리는 에코 히어로!》 시리즈는 나와 가까운 환경부터 점차 확대된 환경 속에서의 환경 문제와 문제 해결을 위한 방법을 소개합니다. 밝고 생생한 색감의 그림을 통해 환경 문제와 이것을 해결하기 위해 우리가 할 수 있는 방법을 상세하게 설명하여 아이들이 평생 동안 ‘에코 히어로’가 될 수 있도록 안내합니다. \n《우리는 에코 히어로!》 시리즈의 첫 번째 책인 《우리는 에코 히어로! 집에서 시작하기》는 가정에서 에너지와 물을 사용하는 방법과 쓰레기를 줄이고, 재사용하고, 재활용하는 것이 왜 중요한지 살펴봅니다. 그리고 아이들이 집에서 실행할 수 있는 방법들을 알려줍니다. 집에서 쓰는 에너지 전기, 물, 화석 연료에 대해 알아보고, 어떻게 에너지를 쓰고 있는지, 왜 에너지를 아껴 써야 하는지, 어떻게 하면 아껴 쓸 수 있는지 알아봅니다. 또, 쓰레기를 왜 줄여야 하는지, 줄이는 방법으로 재사용과 재활용은 어떻게 하는지 등을 알아봅니다. 맨 마지막에는 퀴즈가 있어 나의 에코 히어로 점수도 알아 볼 수 있습니다.\n\n기후 위기의 시대, 환경 감수성이 필요한 때입니다. 《우리는 에코 히어로!》 시리즈는 어린이가 환경 에 대해 공감하는 태도를 갖고 환경 친화적인 삶을 실천할 수 있도록 도와줍니다. 나아가 여러 얼굴 색깔을 가진 사람들, 휠체어를 타거나 걸음보조기를 사용해 걷는 친구들이 함께 어울리는 그림을 통해서 다양성을 포용하게 합니다. 집에서부터 자연, 동네, 여기저기에 이르기까지 4권 세트로 구성된 이 그림책과 함께라면, 우리는 어디에서나 에코 히어로!\n- 이현아(교사, 좋아서하는그림책연구회 대표)',
  },
  {
    title: '우리는 에코 히어로! 2: 자연과 함께하기',
    rate: 3,
    link: 'https://search.shopping.naver.com/book/catalog/40342146618',
    image: 'https://shopping-phinf.pstatic.net/main_4034214/40342146618.20230606103846.jpg',
    author: '플로렌스 어커트',
    discount: '12600',
    publisher: '나무말미',
    pubdate: '20230601',
    isbn: '9791191827255',
    description:
      '처음 시작하는 환경 교육 시리즈 “우리는 에코 히어로!”\n환경 문제를 공감하고 긍정적인 환경 감수성을 형성하는 환경 논픽션 그림책\n집에서 시작하고, 자연과 함께, 동네에서 함께, 여기저기 다니면서 실천하는 우리는 에코 히어로!\n우리가 사는 지구 환경과 생태계의 연결성을 이해하고 실천하는 ‘에코 히어로’가 되자!\n\n세계 여러 나라에서 갑작스러운 더위나 추위, 너무 많은 비나 눈이 오는 날이 점점 늘어나고 있습니다. 환경 오염, 생태계 파괴, 기후 변화 등 다양한 환경 문제가 등장하면서 지구의 기후와 환경이 변하고 있는 것입니다. 그러다 보니 환경에 대한 관심이 높아지고, 환경 교육의 중요성이 부각되고 있습니다. 특히 환경 교육을 통해 환경 감수성을 키우는 것에 대한 중요성이 높아지고 있습니다. \n\n어릴 때부터 자연스럽게 나와 가까운 환경에서의 환경 문제와 에너지 문제를 인식하고, 생물 및 자연과 공유하는 환경에 대해 존중하는 태도를 형성한다면, 우리 아이들의 환경 감수성을 높이고 환경을 소중히 여기는 책임 있는 사람으로 성장하게 할 것입니다. \n\n『우리는 에코 히어로!』  시리즈는 나와 가까운 환경부터 점차 확대된 환경 속에서의 환경 문제와 문제 해결을 위한 방법을 소개합니다. 밝고 생생한 색감의 그림을 통해 환경 문제와 이것을 해결하기 위해 우리가 할 수 있는 방법을 상세하게 설명하여 아이들이 평생 동안 ‘에코 히어로’가 될 수 있도록 안내합니다. \n\n『우리는 에코 히어로!』 시리즈의 첫 번째 책인 《우리는 에코 히어로! 집에서 시작하기》는 가정에서 에너지와 물을 사용하는 방법과 쓰레기를 줄이고, 재사용하고, 재활용하는 것이 왜 중요한지 살펴봅니다. 두 번째 책인 《우리는 에코 히어로! 자연과 함께하기》는 우리가 사는 지구와 자연 환경을 이해하고 식물을 키우고 야생 동물을 돕는 것부터 쓰레기를 집으로 가져가는 것이 왜 중요한지 이해하며, 우리가 자연 속의 일부로서 환경을 돌보는 방법을 살펴봅니다. 세 번째 책인 《우리는 에코 히어로! 동네에서 함께하기》는 우리 동네는 우리가 이웃들과 함께 살아가는 터전임을 이해하고, 학교와 지역 사회에서 우리가 에너지 사용을 줄이고, 쓰레기를 줄이고, 재사용하고, 재활용할 수 있는지 살펴봅니다. 네 번째 책인 《우리는 에코 히어로! 여기저기 다니면서》는 우리가 여행할 때 에너지를 사용하는 방법과 화석 연료, 친환경 쇼핑 등의 이슈를 살펴봅니다.',
  },
  {
    title: '뽀롱뽀롱 뽀로로 우리는 친구',
    rate: 5,
    link: 'https://search.shopping.naver.com/book/catalog/32462284726',
    image: 'https://shopping-phinf.pstatic.net/main_3246228/32462284726.20230614072503.jpg',
    author: '키즈아이콘 편집부',
    discount: '6480',
    publisher: '키즈아이콘',
    pubdate: '20140115',
    isbn: '9788964132593',
    description:
      '『뽀롱뽀롱 뽀로로 우리는 친구』는 에디가 신기한 장난감 로봇을 만들었다. 뽀로로와 크롱은 서로 로봇을 갖고 놀겠다며 싸우게 되고 뽀로로와 크롱은 화해를 할 수 있을까요?',
  },
];

const UserForm = () => {
  const [libraryData, setLibraryData] = React.useState<string[]>([]);
  React.useEffect(() => {
    const datas = mockData.map(data => `${data.title} / ${data.author}`).sort((a, b) => a.localeCompare(b));
    setLibraryData(datas);
  }, []);

  const selectors = [
    {
      id: 'book',
      datas: libraryData,
      title: '내 서재에서 좋아하는 책 기반으로 추천받기',
      placeholder: '좋아하는 책을 고르세요',
    },
    { id: 'book', datas: WEATHER, title: '날씨에 어울리는 책 추천받기', placeholder: '날씨를 고르세요' },
    { id: 'book', datas: MOOD, title: '내 기분에 맞는 책 추천받기', placeholder: '기분을 고르세요' },
  ];

  return (
    <Container mt={10}>
      <Title order={1} size={30}>
        내 취향대로, 상황따라 책을 추천받아 보세요!
      </Title>
      <Text fz={'md'} p={8} c={'dimmed'}>
        * 다음 항목 중 하나 이상을 작성해주세요.
      </Text>
      <Paper shadow="sm" p="md" radius={'md'} withBorder>
        <form>
          {/* <Selector datas={libraryData} title="좋아하는 책 기반으로 추천받기" placeholder="좋아하는 책을 고르세요" /> */}
          {/* <TextInput label="검색으로 고르기" placeholder="책 검색하기" /> */}

          <Flex direction={'column'} gap={4}>
            {selectors.map(selector => (
              <Box key={selector.id}>
                <Selector {...selector} />
                <Space h={'sm'} />
              </Box>
            ))}
            <Title size={20}>기타 조건 입력하기</Title>
            <TextInput aria-label="기타 조건" placeholder="더 추가하고 싶은 조건을 명확하게 입력해주세요" />
            <Space h={'sm'} />

            <Button type="submit">추천받기</Button>
          </Flex>
        </form>
      </Paper>
    </Container>
  );
};

export default UserForm;
