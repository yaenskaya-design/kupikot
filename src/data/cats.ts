export interface Cat {
  id: number;
  breed: string;
  price: number;
  photo: string;
  description: string;
}

export const cats: Cat[] = [
  {
    id: 1,
    breed: "Мейн-кун котёнок",
    price: 18000,
    photo: "https://c70.img.avito.st/image/1/1.neyjtraAMQW1FpMElejvxr0WMwERATUFEWZQARG1MKcWFTUftRaTBBU.W7PEL7BZHFKREFznMX2Rd7C2o5Niya-7mCBgZ3NEc4E",
    description: "Чудесная озорная энергичная девочка, тиккированная черепаха. Чистокровная, клубная."
  },
  {
    id: 2,
    breed: "Шотландский прямоухий котёнок",
    price: 30000,
    photo: "https://c70.img.avito.st/image/1/1.uRPi3raAFfr0frf7nOSZPfZ-F_5QaRH6UA50_lDdFFhXfRHg9H63-1Q.o7rbef0QwVTLYDFqHEZLWj4OkEUvrMGU8MJlrTzQRgQ",
    description: "Породистый шотландский котенок с документами. Окрас — черный мрамор. Отец — чемпион."
  },
  {
    id: 3,
    breed: "Бенгальский котёнок",
    price: 80000,
    photo: "https://40.img.avito.st/image/1/1.K-ibzLaAhwGNbCUAwfwM-5xshQUpe4MBKRzmBSnPhqMub4MbjWwlAC0.z_kesCPBoB0CSxXJWVJzyLmJ-QfB5rJiSb7iNR-uBFk",
    description: "Невероятный бенгальский котенок шоу класса. Редкий снежный окрас, от чистокровных родителей."
  },
  {
    id: 4,
    breed: "Мейн-кун котёнок",
    price: 38000,
    photo: "https://b20.img.avito.st/image/1/1.bfZ5qbaAwR9vCWMeL_hF6XsJwxvLHsUfy3mgG8uqwL3MCsUFbwljHs8.ZvsCig-7gt2li5QHCC6K-pB2jz8SYy1MyK2qfGvjp3E",
    description: "Маленькое солнышко ищет заботливые ручки. Шиншилловая шубка, очень контактный!"
  },
  {
    id: 5,
    breed: "Курильский бобтейл",
    price: 40000,
    photo: "https://b30.img.avito.st/image/1/1.KZ6IaraAhXeeyid21hZZ443Kh3M63YF3OrrkczpphNU9yYFtnsondj4.tlWQ6n_Y4lYsFx2iASZzkV7jGSIr7_gnKLzp_xMje3A",
    description: "Чистопородный красивый котенок яркого золотого мраморного окраса из старейшего питомника."
  },
  {
    id: 6,
    breed: "Бенгальский котёнок",
    price: 40000,
    photo: "https://c60.img.avito.st/image/1/1.hozEH7aAKmXSv4hkxFWCg8C_KGF2qC5lds9LYXYcK8dxvC5_0r-IZHI.euWlS1e9KcW26EFsUM8rYG7U_S8i_IvMujiOFduu02M",
    description: "Бенгальский котёнок шоу класса. Окрас: Розетка на золоте. Глитерная шерстка!"
  },
  {
    id: 7,
    breed: "Шотландский вислоухий длинношёрстный",
    price: 12000,
    photo: "https://b30.img.avito.st/image/1/1.MgkinLaAnuA0PDzhSuwkEiA8nOSQK5rgkEz_5JCfn0KXP5r6NDw84ZQ.iMSL0rlUswLKLTtENgDznJZaIh9qjTQW9ePk4YOVikI",
    description: "Чистокровный шотландский котёнок. Хайленд фолд. Окрас светло рыжий."
  },
  {
    id: 8,
    breed: "Британский короткошёрстный котёнок",
    price: 30000,
    photo: "https://b40.img.avito.st/image/1/1.ebujpbaA1VK1BXdT3cBOnb0F11YREtFSEXW0VhGm1PAWBtFItQV3UxU.VQFFk1OqOOvZAyN1YUSA07MafApZH1WRiVkaHOJ5ShI",
    description: "Девочка британской золотой шиншиллы от клубных родителей. Яркое золото, зеленые глазки."
  },
  {
    id: 9,
    breed: "Петерболд котёнок",
    price: 10000,
    photo: "https://c60.img.avito.st/image/1/1.Rur1jraA6gPjLkgC9d9J_Pcu6AdHOe4DR16LB0eN66FALe4Z4y5IAkM._OvKq-b6hlS6J_8lCisc6JUP_gHAhGm4h1cyyj8ff8A",
    description: "Ласковый мурлыка, общительный, разговорчивый, активный. От породистых родителей."
  },
  {
    id: 10,
    breed: "Саванна котёнок",
    price: 45000,
    photo: "https://c70.img.avito.st/image/1/1.HyZWILaAs89AgBHOZDRPHFSAscvkl7fP5PDSy-Qjsm3jg7fVQIARzuA.YHWNe2v1OXbQYWbc3Qa0aJ-h3_PRAAY1p9xkqu0hUv0",
    description: "Породистый котенок Саванна. Привит, обработан от паразитов. Возможно чипирование."
  },
  {
    id: 11,
    breed: "Шотландский вислоухий котёнок",
    price: 50000,
    photo: "https://70.img.avito.st/image/1/1.PxwqC7aAk_U8qzH0WA8qBC-rkfGYvJf1mNvy8ZgIklefqJfvPKsx9Jw.aVPYuQ_g1-vMIQc2H2ueAMNslI8oKQciHt_D3TyygBU",
    description: "Породистый шотландский котенок с документами. Окрас — красный мрамор. Отец — чемпион."
  },
  {
    id: 12,
    breed: "Британский короткошёрстный котёнок",
    price: 7000,
    photo: "https://b40.img.avito.st/image/1/1.BUpJh7aAqaNfJwuiT8MdLREmq6f7MK2j-1fIp_uEqAH8JK25XycLov8.Lao0kN3I6MqqM64WzPv_OW7h2R4JohFrMaXKd3WPNZo",
    description: "Мама кошка породистая, отец дачный кот. Черный с редкими большими полосками."
  },
  {
    id: 13,
    breed: "Бенгальский котёнок",
    price: 65000,
    photo: "https://c90.img.avito.st/image/1/1.TvCBDLaA4hmXrEAYkQVwpZ6s4B0zu-YZM9yDHTMP47s0r-YDl6xAGDc.UQ9PlSOEwfrSZ07zCT4DrSTI0ZDuM_cvvHJ9B04bwtE",
    description: "Уникальный окрас шоу-класса — снежный Минк. Профессиональный питомник."
  },
  {
    id: 14,
    breed: "Европейский бурманский котёнок",
    price: 50000,
    photo: "https://10.img.avito.st/image/1/1.RobIAraA6m_eokhuyGMqyM2i6Gt6te5vetKLa3oB6819oe513qJIbn4.ZeUrNScFM2E_do_7hKiIM8mbTVtXj66L4jW7ThZe170",
    description: "Клубный породистый бурманский котенок. Окрас коричневый (соболь), глаза желтые."
  },
  {
    id: 15,
    breed: "Абиссинский котёнок",
    price: 39000,
    photo: "https://80.img.avito.st/image/1/1.1zta1baAe9JMddnTeO6BGH11edboYn_S6AUa1ujWenDvdn_ITHXZ0-w.JdKSqR82WRETcLeQvNpHdISPuU9WTfa8TW5U6qKp33E",
    description: "Чистокровный котенок дикого окраса. Великолепная внешность, легко ладит с людьми."
  },
  {
    id: 16,
    breed: "Шотландский вислоухий котёнок",
    price: 33000,
    photo: "https://b50.img.avito.st/image/1/1.pCgnlbaACMExNarAY9PEVyQ1CsWVIgzBlUVpxZWWCWOSNgzbMTWqwJE.g-rBSv_f_8uvL7n2CFi2TQL-1IwOVV0J2m6KR4arL9Q",
    description: "Шотландский вислоухий котенок. Породистый. С документами клуба. Очень ласковый."
  },
  {
    id: 17,
    breed: "Мейн-кун котёнок",
    price: 10000,
    photo: "https://90.img.avito.st/image/1/1.Aiput7aArsN4FwzCZucJT20XrMfcAKrD3GfPx9y0r2HbFKrZeBcMwtg.mTk3vhDW2NS2r6_8FcAATX8HMBiJY4rVbWTXvpWyykQ",
    description: "Породистая девочка, мейн кун. Красивый окрас, яркая, длиннохвостая, игривая малышка."
  },
  {
    id: 18,
    breed: "Шотландский вислоухий длинношёрстный",
    price: 15000,
    photo: "https://b20.img.avito.st/image/1/1.zqEnxraAYkgxZsBJN4WirCRmYEyVcWZIlRYDTJXFY-qSZWZSMWbASZE.dzUd8uA0EW4nWAliRbklN1yf0t6tQOUQtAXgzcbv-g8",
    description: "Чистопородный пушистый котик, редкий дымчатый окрас — как будто переливается!"
  },
  {
    id: 19,
    breed: "Британский короткошёрстный котёнок",
    price: 35000,
    photo: "https://b20.img.avito.st/image/1/1.IHivl7aAjJG5Ny6Q44thGqw3jpUdIIiRHUftlR2UjTMaNIiLuTcukBk.wxyIdHJKGypszAww1BHCS4_u15DuCd8JSr7b_fFepCU",
    description: "Добрая, очень ласковая и игривая британская девочка. Окрас золотая шиншилла."
  },
  {
    id: 20,
    breed: "Британский короткошёрстный котёнок",
    price: 155000,
    photo: "https://c60.img.avito.st/image/1/1.QX4WJ7aA7ZcAh0-WGFYublmG75OkkOmXpPeMk6Qk7DWjhOmNAIdPlqA.Z9uxpQsSMsKxnLfZy-rnJiTucQRNTasqFZ4wP-TDdyw",
    description: "Британская девочка. Окрас голубое золото ау12, глазки голубые. Плюшевая, мордашка бебифейс."
  },
  {
    id: 21,
    breed: "Британский короткошёрстный котёнок",
    price: 30000,
    photo: "https://c70.img.avito.st/image/1/1.Wq3QCraA9kTGqlRF6HcOz8iq9EBivfJEYtqXQGIJ9-ZlqfJexqpURWY.vPd3XfTbauOClv3skgfS_BorwoV0JCD5jsHAZ2W8-wU",
    description: "Кошечка британской золотой шиншиллы. Красивый и редкий окрас. Родители клубные."
  },
  {
    id: 22,
    breed: "Бенгальский котёнок",
    price: 5000,
    photo: "https://90.img.avito.st/image/1/1.VfP05baA-RriRVsb0pAq2_dF-x5GUv0aRjWYHkbm-LhBRv0A4kVbG0I.JX5WUMDrANBO2RLRkHvjp-Hewt93HlMP-mywtJJEH3U",
    description: "Чистокровный бенгальский котенок девочка. Возраст 3 недели, родители живут рядом."
  },
  {
    id: 23,
    breed: "Бенгальский котёнок",
    price: 40000,
    photo: "https://c90.img.avito.st/image/1/1.ToCY5raA4mmORkBoiItw8ppG4G0qUeZpKjaDbSrl48stReZzjkZAaC4.mDR5UtoeeEVTqOweV7R50UoAx_OICYzkoNovUxRmlCo",
    description: "Шикарный бенгальский котёнок девочка, розетка на золоте. Профессиональный питомник."
  },
  {
    id: 24,
    breed: "Тайский котёнок",
    price: 20000,
    photo: "https://30.img.avito.st/image/1/1.jgRm8LaAIu1wUIDsduaXHmZRIOnURybt1CBD6dTzI0_TUyb3cFCA7NA.2FpWajhpDjXmZedTvgjgF6zz4BHm54YwnPI-KlKJVto",
    description: "Тайский котенок. Девочка. Окрас сил-пойнт. Мама и папа чистокровные тайцы."
  },
  {
    id: 25,
    breed: "Бенгальский котёнок",
    price: 35000,
    photo: "https://c70.img.avito.st/image/1/1.zxaUMbaAY_-CkcH-hkKiW5GRYfsmhmf_JuEC-yYyYl0hkmflgpHB_iI.rE0rDENDZEJjgxCCoJzFSJw-sO52pu3PkTGR5Ge9QQo",
    description: "Клубный породистый бенгальский котенок. Очень мощный, но ласковый. Превосходный окрас."
  },
  {
    id: 26,
    breed: "Британский длинношёрстный котёнок",
    price: 16000,
    photo: "https://30.img.avito.st/image/1/1.fFn9QLaA0LDr4HKxiSVcUuXg0rRP99SwT5CxtE9D0RJI49Sq6-BysUs.3AkoodrKRpqt4SS1h0OCtGJYKHbu0FEPEwT8JdB4T4w",
    description: "Очень милая, ласковая британская длинношёрстная девочка. Окрас серебристая шиншилла."
  },
  {
    id: 27,
    breed: "Мейн-кун котёнок",
    price: 35000,
    photo: "https://b00.img.avito.st/image/1/1.wPA9qLaAbBkrCM4YMcfElnIJbh2PH2gZj3gNHY-rbbuIC2gDKwjOGIs.xpDVmo-zpb8uu1RpX4WC6KqdVabTYgsUXw-JyJwjmSU",
    description: "Шустрый рыжик! Чистокровный представитель породы. Окрас шикарный, шубка мягонькая!"
  },
  {
    id: 28,
    breed: "Мейн-кун котёнок",
    price: 22000,
    photo: "https://c90.img.avito.st/image/1/1.bgHek7aAwujIM2DpjoZIA8kzwOxsJMbobEOj7GyQw0prMMbyyDNg6Wg.mBmyWRGIt0f3lq8SEjGEDYfOB08H4thnXv55saTpt78",
    description: "Чистокровная шикарная девочка мейн-кун трехцветная. Трехцветная красавица — счастье в дом!"
  },
  {
    id: 29,
    breed: "Рэгдолл котёнок",
    price: 65000,
    photo: "https://b00.img.avito.st/image/1/1.MSGQMraAnciGkj_J_jZKV5OSn8wihZnIIuL8zCIxnGolkZnShpI_ySY.ueUj0KorHvVmiciLoa2CntZjkh--lGZHtQ5LsU6tgxo",
    description: "Чистокровный котенок с шикарной родословной. Ласковая, игривая, любит посидеть на ручках."
  },
  {
    id: 30,
    breed: "Шотландский вислоухий котёнок",
    price: 25000,
    photo: "https://00.img.avito.st/image/1/1.xoM767aAamotS8hrO4jloThLaG6JXG5qiTsLbonoa8iOSG5wLUvIa40.n4Rvnu0MzYJFcD62iZlwj4T-c1KPf3RtM8XpVZo5vrk",
    description: "Шотландский котенок мальчик. Хорошо ладит с детьми. Очень ласковый и дружелюбный."
  },
  {
    id: 31,
    breed: "Шотландский прямоухий котёнок",
    price: 25000,
    photo: "https://90.img.avito.st/image/1/1.cs38d7aA3iTq13wllBYwz_7X3CBOwNokTqe_IE5034ZJ1No-6td8JUo.OI3tp62cCM2IFbxXQdTRMm-FoXgMcQP0PmP40EzUp9Y",
    description: "Чистокровный комочек красоты ищет добрые руки. Полностью освоил лоток и кушает самостоятельно."
  },
  {
    id: 32,
    breed: "Британский длинношёрстный котёнок",
    price: 55000,
    photo: "https://50.img.avito.st/image/1/1.-7wgEbaAV1U2sfVUWjaJwTyxVVGSplNVksE2UZISVveVslNPNrH1VJY.6odkSUSH2Nv-py1qUGQlEoWdkUr9SjIJOw-RaMUYU18",
    description: "Британский котенок шоу-класса: драгоценный окрас и завораживающие голубые глаза."
  },
  {
    id: 33,
    breed: "Шотландский вислоухий котёнок",
    price: 29000,
    photo: "https://c60.img.avito.st/image/1/1.8-ia27aAXwGMe_0A8IyK2tN6XQUobFsBKAs-BSjYXqMveFsbjHv9ACw._jXGKGBtjJnp2eBVsnWJeNieMQG7rThg-gxRX_lXs2A",
    description: "Чудесная девочка с золотым характером. Окрас золотой тикированный. Ручная, ласковая."
  },
  {
    id: 34,
    breed: "Курильский бобтейл",
    price: 15000,
    photo: "https://c80.img.avito.st/image/1/1.iAlT4raAJOBFQobhT5jTfQtDJuThVSDg4TJF5OHhJULmQSD6RUKG4eU.b3wni3C1-lheiO9Y9dM8RVnG3Kv6hGx7cmJkWX16-8E",
    description: "Чистокровный котенок курильского бобтейла, девочка. Экстерьер на 5, мраморного цвета."
  },
  {
    id: 35,
    breed: "Мейн-кун котёнок",
    price: 18000,
    photo: "https://90.img.avito.st/image/1/1.qb6DCraABVeVqqdW3XCdsIOrB1MxvQFXMdpkUzEJBPU2qQFNlaqnVjU.oxUF_9VbURVJoYmjuF3BV_pDNttcSh2iXBh2Dt1o7Pw",
    description: "Чистокровная кошечка мейн кун в черепаховом окрасе. Крупная, высокий постав ушей."
  },
  {
    id: 36,
    breed: "Мейн-кун котёнок",
    price: 30000,
    photo: "https://40.img.avito.st/image/1/1.ZXAsiLaAyZk6KGuYapEZAy4oy52eP82ZnlionZ6LyDuZK82DOihrmJo.CXnMfbT3cD3AMEjHqKOIGg1EbxTfdnkAkUUmD0kqM0U",
    description: "Шикарный мальчик мейн-кун. Окрас черный на серебре, полидакт. Чистокровный."
  },
  {
    id: 37,
    breed: "Британский короткошёрстный котёнок",
    price: 30000,
    photo: "https://c70.img.avito.st/image/1/1.5EPQhLaASKrGJOqrlPfPRsckSq5iM0yqYlQprmKHSQhlJ0ywxiTqq2Y.-Kw4OSEbK4xkl8qjqWfflOjAujUdeBbVDGfwG5b0gJE",
    description: "Красивый, добрый и очень ласковый мальчик. Окрас яркий золотая шиншилла, глазки зелёные."
  },
  {
    id: 38,
    breed: "Бенгальский котёнок",
    price: 16000,
    photo: "https://b40.img.avito.st/image/1/1.5qMEM7aASkoSk-hLRCSVjAeTSE62hE5KtuMrTrYwS-ixkE5QEpPoS7I.e1U_i-KM7dVG8XUTLtbhzp5dDXdlp1BM7YKjztwf8iI",
    description: "Чистокровный котенок. Папа и мама живут вместе. Родились 1 октября."
  },
  {
    id: 39,
    breed: "Шотландский вислоухий котёнок",
    price: 30000,
    photo: "https://c60.img.avito.st/image/1/1.qdGikbaABTi0Mac5_OfvsqQxBzwQJgE4EEFkPBCSBJoXMgEitDGnORQ.j2CuGm24Fk_mOBlwTsWWf8pO3oEoNCSCmlaZsr32GfQ",
    description: "Шотландский вислоухий котенок. Мальчик. Золотая шиншилла. Шикарный золотой окрас."
  },
  {
    id: 40,
    breed: "Ориентальный котёнок",
    price: 33000,
    photo: "https://00.img.avito.st/image/1/1.RWm_0raA6YCpckuBucdTX71y64QNZe2ADQKIhA3R6CIKce2aqXJLgQk.Vflqjgxxww0HXp3QyhaPfQK6KEJTZk8pE3kWa-pJZvk",
    description: "Окрас эбони (черный). Чистокровные ориенталы, в современном типе."
  },
  {
    id: 41,
    breed: "Британский короткошёрстный котёнок",
    price: 40000,
    photo: "https://10.img.avito.st/image/1/1.b2X19baAw4zjVWGNp4wFM_dVwYhHQseMRyWiiEf2wi5AVseW41VhjUM.VcDHba2sVVtZA9_ZcxuMziLyAkbcW4NslRzkc9y5a9E",
    description: "Милый британский котерок, мальчик. Окрас золотая шиншилла, зеленоглазый."
  },
  {
    id: 42,
    breed: "Шотландский вислоухий котёнок",
    price: 28000,
    photo: "https://80.img.avito.st/image/1/1.lY2kNraAOWSylptlgmiUg6SXO2AWgT1kFuZYYBY1OMYRlT1-spabZRI.gU3sJGW5VDjTn3dgtYcy6EDyx5wZtdpHWErAas1W-D4",
    description: "Чистокровный шотландский котёнок. Мальчик вислоухий. Родители клубные, папа чемпион."
  },
  {
    id: 43,
    breed: "Британский короткошёрстный котёнок",
    price: 22500,
    photo: "https://80.img.avito.st/image/1/1.ZCH03LaAyMjifGrJsMkXes18ysxGa8zIRgypzEbfyWpBf8zS4nxqyUI.ROqsR9uh3ppboq8o45EYEwYkbP9dgIA5QjfocfoYgTo",
    description: "Чистокровная британка от элитных выставочных родителей. Умненькая, ласковая малышка."
  },
  {
    id: 44,
    breed: "Ориентальный котёнок",
    price: 15000,
    photo: "https://20.img.avito.st/image/1/1.C3098LaAp5QrUAWVJ9Q4HCFQpZCPR6OUjyDGkI_zpjaIU6OOK1AFlYs.A25ljZ-XkJaXmFBXAMMwjO3DYb5zm5f0-PoUad5BxT4",
    description: "Чистокровный котенок. Шоколадная девочка. Очень контактные, привязаны к человеку."
  },
  {
    id: 45,
    breed: "Мейн-кун котёнок",
    price: 45000,
    photo: "https://b10.img.avito.st/image/1/1.1sRyw7aAei1kY9gsUpSSnD1ieCnAdH4twBMbKcDAe4_HYH43ZGPYLMQ.bYqYeOMU_XNlhX8-wDXI6oAVYlQDffIWslmZfT3_Xvo",
    description: "Все прививки и документы клубного котёнка. Питомник. С Документами."
  },
  {
    id: 46,
    breed: "Эльф котёнок",
    price: 30000,
    photo: "https://b40.img.avito.st/image/1/1.acjU6baAxSHCSWcgiqw4qIxIxyVmXsEhZjmkJWbqxINhSsE7wklnIGI.EgKnsXjuue_fWqRtrNcKGVQG6mVdjJIC3x8qUbzpICI",
    description: "Очаровательная кошечка эльф. Родители породистые. Мать — канадский сфинкс, отец — эльф."
  },
  {
    id: 47,
    breed: "Мейн-кун котёнок",
    price: 14000,
    photo: "https://b00.img.avito.st/image/1/1.8Uqqn7aAXaO8P_-ixKzVTag_X6cYKFmjGE88pxicXAEfPFm5vD__ohw.TaUpVMJwI0NAdSo8jPIFEMU3EYz9UWleymMUdtaALqw",
    description: "Голубые девочки биколор. От породистых родителей. Кисточки и геном тряпичной куклы."
  },
  {
    id: 48,
    breed: "Бенгальский котёнок",
    price: 40000,
    photo: "https://c90.img.avito.st/image/1/1.3yvgrLaAc8L2DNHD0vuHP68NccZSG3fCUnwSxlKvcmBVD3fY9gzRw1Y.-lo0qbE55IVR7LQkLjuRrOCVH13WiCYA8tnqpwuno4Q",
    description: "Бенгальский котенок от клубных родителей — ждет заботливых хозяев! Чудесный малыш."
  },
  {
    id: 49,
    breed: "Ориентальный котёнок",
    price: 15000,
    photo: "https://80.img.avito.st/image/1/1.SlshQ7aA5rI340SzOTJ1HyTj5LaT9OKyk5OHtpNA5xCU4OKoN-NEs5c.IsNBkJQ75gP4_W02IAIuP3zVrFH_hgqrNGR6WdyHwOM",
    description: "Чудесный серебристый котёнок (ориентал) с классическими ушками. Невероятная харизма!"
  },
  {
    id: 50,
    breed: "Шотландский прямоухий котёнок",
    price: 8000,
    photo: "https://b10.img.avito.st/image/1/1.wBUp-7aAbPw_W879JcS4ZyxbbvibTGj8mysN-Jv4bV6cWGjmP1vO_Z8.AwT3qRbUjbR2Od10b5tzCbBNZKjDm34v-vaEz5N3Lp4",
    description: "Чистопородный котенок красивого яркого окраса. 2 месяца, полностью приучен к домашней жизни."
  },
  {
    id: 51,
    breed: "Абиссинский котёнок",
    price: 45000,
    photo: "https://b30.img.avito.st/image/1/1.RmDztLaA6onlFEiI880dFfEU6I1BA-6JQWSLjUG36ytGF-6T5RRIiEU.fT-atspDmNpZcPjLuL0pWNFwVxgB7tIBkEMRnu6eRnA",
    description: "Чистокровный абиссинский котёнок с метрикой. Очаровательный, рождённый 22 сентября."
  },
  {
    id: 52,
    breed: "Мейн-кун котёнок",
    price: 25000,
    photo: "https://b40.img.avito.st/image/1/1.HtaL3raAsj-dfhA-u_4QoY5-sDs5abY_OQ7TOznds50-fbYlnX4QPj0.7Ju-QSuOqMrV88bYXlV_4YykI5rlj5XPfZTjcBylkhQ",
    description: "Шикарная девочка Мейн куна. Со всеми документами, прививками. Крупные, куражные, ласковые."
  },
  {
    id: 53,
    breed: "Петерболд котёнок",
    price: 27000,
    photo: "https://b40.img.avito.st/image/1/1.XMGkXraA8Ciy_lIpkHcezaf-8iwW6fQoFo6RLBZd8YoR_fQysv5SKRI.1KExS3qjdQ39_CNZEjt_djNeM1Zx0k9khZJm7YYJZBk",
    description: "Петербургский сфинкс котенок. Мальчик. Родители клубные. Черный. На длинных лапках."
  },
  {
    id: 54,
    breed: "Британский короткошёрстный котёнок",
    price: 20000,
    photo: "https://c70.img.avito.st/image/1/1.tGWqrLaAGIy8DLqNzvbrebwMGogYGxyMGHx5iBivGS4fDxyWvAy6jRw.rgjl6I18kFqfYkKeIw0tUyfq3j_MSCIVEQ9Nhi_oY",
    description: "Любознательный золотой мальчик от чистокровных породистых родителей золотой и серебряной шиншиллы."
  },
  {
    id: 55,
    breed: "Тайский котёнок",
    price: 20000,
    photo: "https://c90.img.avito.st/image/1/1.JoErwbaAimg9YShpa71S8xJhiGyZdo5omRHrbJnCi8qeYo5yPWEoaZ0.A61XKfP5icHD6yVyvVkshnmcwBg2GigDEB_5HfdypxY",
    description: "Чистопородный тайский котёнок, окрас блю-поинт, сил-поинт. Здоровый, ласковый."
  },
  {
    id: 56,
    breed: "Британский короткошёрстный котёнок",
    price: 80000,
    photo: "https://10.img.avito.st/image/1/1.CLiwlbaApFGmNQZQrKUp3bM1plUCIqBRAkXFVQKWpfMFNqBLpjUGUAY._RwLmT7BLqf3jnmZmAyDl15xYALD5wCOgorn0RuBxiU",
    description: "Чудесная малышка, окрас золотая шиншилла ny12. Великолепный чистокровный британский котёнок."
  },
  {
    id: 57,
    breed: "Мейн-кун котёнок",
    price: 17000,
    photo: "https://c60.img.avito.st/image/1/1.BfaA17aAqR-WdwsehrtU6Pp1qxsyYK0fMgfIGzLUqL01dK0FlncLHjY.Kar2G1rWYRIbbx-UCPSBxdhhK1PcmE8zLLHB-aBWpDM",
    description: "Мейн Кун. Девочка. Ласковая и контактная. Очень красивая. Голубого окраса."
  },
  {
    id: 58,
    breed: "Британский короткошёрстный котёнок",
    price: 100000,
    photo: "https://c70.img.avito.st/image/1/1.Wq3QCraA9kTGqlRF6HcOz8iq9EBivfJEYtqXQGIJ9-ZlqfJexqpURWY.vPd3XfTbauOClv3skgfS_BorwoV0JCD5jsHAZ2W8-wU",
    description: "Редчайший окрас «горький шоколад»: невероятная глянцевая шубка и элитная британская генетика."
  },
  {
    id: 59,
    breed: "Британский короткошёрстный котёнок",
    price: 6000,
    photo: "https://10.img.avito.st/image/1/1.b2X19baAw4zjVWGNp4wFM_dVwYhHQseMRyWiiEf2wi5AVseW41VhjUM.VcDHba2sVVtZA9_ZcxuMziLyAkbcW4NslRzkc9y5a9E",
    description: "Мама кошка породистая, отец дачный кот. Рыжий, в маму плоская мордочка, большие круглые глазки."
  },
  {
    id: 60,
    breed: "Бенгальский котёнок",
    price: 5000,
    photo: "https://90.img.avito.st/image/1/1.VfP05baA-RriRVsb0pAq2_dF-x5GUv0aRjWYHkbm-LhBRv0A4kVbG0I.JX5WUMDrANBO2RLRkHvjp-Hewt93HlMP-mywtJJEH3U",
    description: "Очаровательный, активный, ласковый мальчик. Возраст 4 месяца. Окрас бенгальский."
  }
];
