export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
  imageAlt: string;
  badge?: string;
  ctaLabel?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  description: string;
  layout: "grid" | "feature" | "split" | "compact";
  items: MenuItem[];
};

export const featuredDishes = [
  {
    title: "Kinetic Party Jollof",
    description: "Smoky, spiced to perfection, and served with a quarter chicken.",
    price: "₦4,500",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBdReRHcQE8_u0BdX7kdfW_7AufCrVi1fIZM8zakLq8eeLtxoFdP_so2wu1TNUyxqyRDU4l444AFR4sTX3WC6tNKvUOY7ayKqILq-Oj4EZufYTTAV13Enoiql0GkH3qwGb-3blIzwZQfmx8wMoMda0bRSUTrEifE-IdXflL0c9tI5L-r_iTdcPPPqD3EQ2J21RCJ1FMXcat43tpdjodToUYOhgnS_D9wAl6VOwBET7GvWbRaMVZPiO1BF2ZU3tjmFjhWK2XoIlcL2fT",
    imageAlt: "Large plate of Nigerian party jollof rice with fried plantain",
    badge: "Bestseller",
  },
  {
    title: "Signature Suya",
    description: "Beef or chicken flank, dry-rubbed in premium Yaji spice.",
    price: "₦3,200",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA1cFKPWxFcfySi2SaiiJsfbvVvybqyNL-rw6VnQ1g7VBEdLxndYva6cxxSwl3e0coelTKqTaVTcKMhjcBAY3AyzmMVr8pCiOZkkZe2z5-cKL6hZr7XQSr5FKAvonG0YV0lm-SL-TXkVfwBvcBcB-tjXcvCRfk3lmCrCGfYAFBRQXYUgCkglf_v4lZo1CjbyHBE_UjvrwR1xS144oCq1Z0ZkbVLHPY8On7nTQkMD3TBtGnGsj4BbWGB9TX6zpkf-kSnViOzd7elvLQu",
    imageAlt: "Thinly sliced grilled beef suya with onions and tomatoes",
  },
  {
    title: "Special Fried Rice",
    description: "Nigerian fried rice with vegetables, liver bits, and shrimp.",
    price: "₦4,000",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYKv9FEa2ePSAO7sqPuCQxYqm34Yf19ruUqnOyDf5-nC1oy_oYwRusJuohja_kLFcvb8gtNSmf9wXGLNzkNmZttyJHNwirUdSHvNTcWvJOkHLa7HqeCaUoanRbZeXyDzm4eSM56gTqav9EFHseEaKULAABJrJ0fx_LswDsBWNxW13JHsuPk3p4o436Qd2M0pYzs-vEyWyAmKFwRdBjp2PLAQiPpCa69UJnP9KJVSVx-CtP4olLe98XLDHULMhSQKUvhpKwJGw3T7D9",
    imageAlt: "Nigerian style fried rice with vegetables and shrimp",
  },
  {
    title: "Double Wrap Shawarma",
    description: "Chicken shawarma with creamy garlic sauce and fresh vegetables.",
    price: "₦2,800",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3cZOIiG9xeUaHgU44nyzxTZYoMBd-dP48Ua9SON_brUcAVn_AMsjZLBkUx1jA958ukcgsMhjueEiYXHxzc9-rUuHBu7GP7JKVPKsv2dqToq38sV7P38ym0GLByuvUi6cu7XhSIG5LYV9npxKh2RMLNEBspmy8vqsqGg3OdeLWvjKx7N6kE_PckiNDue_PKHeV2d1sbulizqePPLaB0nAXV3v0jBxe-L4wz4IHC1lXa959o1h2m88F0QYHAKdi04oKKX4AnrZpEbic",
    imageAlt: "Double wrap chicken shawarma with creamy garlic sauce",
  },
];

export const menuCategories: MenuCategory[] = [
  {
    id: "rice",
    title: "Rice Dishes",
    description: "Bold rice plates built for quick lunches, office orders, and late-evening cravings.",
    layout: "grid",
    items: [
      {
        name: "Smoky Jollof Rice & Spicy Chicken",
        description:
          "Parboiled long-grain rice infused with woodfire smoke, bell pepper blend, and served with quarter-grilled chicken.",
        price: "₦4,500",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCBeTjyQPlYp_TlsQvGe-hX9lgyC2x8E2pVGRmgWgo6zD0KHCO1FQ5MaNsupS5wIIqmCaeDjJ5wJyCQym37r6zavoSyjCOxLmvlGdWwVZvUHLbVgbkfSeUqem3Fgx4jMUTqLTAHp6vHXZmRhjIP4oBVjx1fSI50q4LZkPYUeYY0hNjfZVYHYBp8KBaymJPskWgd9bLMjqmUalhxWu9CpYjAGUg56zLSORZnmC0An_S4dUn90t5uYJ-7_3wEJGB67d1lfQJYSfaC-zLD",
        imageAlt: "Vibrant orange smoky jollof rice with grilled chicken",
        badge: "Bestseller",
      },
      {
        name: "Kinetic Signature Fried Rice",
        description:
          "Sauteed with market-fresh vegetables, liver bits, and jumbo prawns for a proper celebration plate.",
        price: "₦5,200",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCpZWQ0uHOhXfW8ExFsLDsPpBiBh2jQBY7UDo7Lzfxcu5SGZWNnvtSupP5Yf7EnhMsvd9gw03Q898n9zvWg7LXstiaWx4SP4PB6OcjOZW1xpGqgkBTIDmj1zio7sQfTBT-Lj_5nSGzgSnMEhyV29IAdUKuYpnsOCwrH7pGVEk1ZMN8i_hpRwp2pMFr5k2Rx7Q0MRvyK3TrKwSrBz1Jdtdp0UwYTaMYtEiKLWWFx0mAsvUxBSc79RMALM3yL8UBYRjTidQDszIgaNpWl",
        imageAlt: "Traditional Nigerian fried rice with mixed vegetables and prawns",
      },
      {
        name: "Ofada Royale & Ayamase Stew",
        description:
          "Authentic unpolished rice paired with legendary designer stew enriched with assorted meats.",
        price: "₦6,000",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD4SZp3ybgvtxgi1Wc62BA9S9UG13DP6k2X4sDeInR592YK0TX1eabv-i1Z9-uJj1D2ukwM2onQjv87GNhVns_8hYT5UdLsKNP4aTY-HCDc49Q7J2OU1eU1pQUQTfZhcWVleiMQicYWwtYFNhuN6GsWJ6oMM2ppSnfZ3iwltoMXvkgTfuBvhIxc_v4zUaYLLRkKrGhfa05lbqLymrGff1BYUrMjwddeM7RQ50bwvU2YGVsXAW-pWbUXZWhCPlSH1ZVSJGOvu_gGD2y1",
        imageAlt: "Authentic ofada rice with spicy ayamase designer stew",
        badge: "Spicy",
      },
    ],
  },
  {
    id: "grills",
    title: "Grills & Suya",
    description: "Fire-finished protein platters with the Lagos heat your regular order deserves.",
    layout: "feature",
    items: [
      {
        name: "The Ultimate Suya Platter",
        description:
          "A mountain of beef, chicken, and ram suya dusted with premium Kano Yaji spice.",
        price: "₦12,500",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAzyROy7t4HxAo3-Zf1I8-xJkkP1IXj4pxaPcl_Y2h9r4tJMZA0ZrzhiJ53la1z7126ZfVKN7-WYowqfHRvpngPsvJgOAjmSNm9HAxmNvh3ZSCgvo65J_4I78TidW3Oi6pth5xgemsrJ2Hdpj6mqnkldbJ9Mt91JqmXZv1y3EOfJSNT4RCWk2J_e0mKzAr4jbmBoDnKb2pvRaQjfy-jWtQs8HzfejVn3HiAK0D1NO_SUoEGMx8FItzDkEJ6CsmakowEvpbvB159GhPY",
        imageAlt: "Generous platter of beef suya with onions and tomatoes",
      },
      {
        name: "Grilled Croaker & Bole",
        description:
          "Whole croaker fish char-grilled with house kinetic oil and served with roasted plantain.",
        price: "₦7,800",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBsG5vrXJuTm_OSmswmeJT-EAIA6xfbCFewbWo2nB0ocVgs7Sonizhh5Ssfa2DM6KhXUUgOvA9jHQhXvB4s2GmmD9zPovyrIairV8vYb3P5PxM-vHj2gHdVjqPnl_Dabadq_L5YZlcNoq3fbXAI0dRnJgAxep_nmIGuRoB5Ho5HDhdEyZq-pkzsETBafxJyO84AytUsVbJCdrRaUCEfJJ-TkWlIHLZXBrkG_KkkOgILRF1GJFIkkBZeSCIsCTZEVnUdRc5Hhq_JVyWJ",
        imageAlt: "Spicy grilled fish with roasted plantain",
      },
      {
        name: "Spicy Kinetic Wings",
        description:
          "Eight jumbo wings tossed in a glossy honey-chili-ginger glaze with smoky heat.",
        price: "₦4,200",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMO86STxej5khRTGfHogaHBhIHyY5cosa4JMAUGv4F3-YZkMsCQiOFpiasRFXt_ZKZFNIPS3DhcVmUJsJJ5kwu5y_7Yuk5TMMSCRWXI96SEKetNDgHDIvDWq81XNj8nXfNMfWLOhfqLzHLuUehhxiic8p3QUNNtAJ7Q8s8YcdZLhJeSuTtrXo8Z40BdKTydAi0h2_Qd-I9CRvI3Za2dck7XNp3a4TTso-MB8InDx-ptJ488Spizt5F9LE_B6Sstu2jGofoacZx2tVv",
        imageAlt: "Grilled peppered chicken wings",
      },
    ],
  },
  {
    id: "swallow",
    title: "Swallow & Soups",
    description: "Rich, comforting soups and swallows that still feel polished enough for a modern menu.",
    layout: "split",
    items: [
      {
        name: "Egusi Perfection",
        description:
          "Melon seed soup with pumpkin leaves, smoked fish, and your choice of beef or goat meat with swallow.",
        price: "₦6,500",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDgA43WaPCJRQYzmbRBeov8sEYw8-1OMNldaFl_zL56FpVZIdRfdgFBHzuNBpqvTFFKqVAa3HgG5TnmzDt_tTPiD8dbn_Q9SlMQ8efvzMWcvq4hldknlCeuUyWpoKnRf_OznooiJD9-0d7iu6bB2tbFt0JkBWLQJYYkNI6AGfkh8Enq2FyFwEACVQdLg_9p21DoMlnoBJDajQtBA_9quykjMHRFYOB9PZggvU_HAWHML4mxZ5uibzieBvh1-ntlg_zjYVifps3SpGG-",
        imageAlt: "Rich egusi soup with pounded yam",
      },
      {
        name: "Luxe Seafood Okra",
        description:
          "Crunchy okra cooked in a rich broth with crabs, prawns, snails, and fresh fish.",
        price: "₦8,900",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuB0khZSLWHa-Kkjd0adH_KmpRn0UW-O040mSgUXMhDaqzitTfyDshuMNrj8acx-EJEUPy2DIOmkYOEtehgZpypxPAGRV5aW5TO8OGDW4-bzB6mc9spTufpT7q-7HizGZr8LGpbng_XDKlegit4Ae32t5Ce3soSkX2wCVh7_Z2THV-ZlXRKa6M8isSVp8zQ8UOnaxrs5C3d0QVvPlBqbhFNQ-UiQYOMPCe2yMjgOO9baeYzSbtfIL2tdk40U9o0ghSuCyBU1gja6zrbf",
        imageAlt: "Seafood okra soup with various crustaceans",
      },
    ],
  },
  {
    id: "chops",
    title: "Small Chops",
    description: "Easy-to-share plates for parties, office trays, and casual snacking.",
    layout: "compact",
    items: [
      {
        name: "Party Pack XL",
        description: "Puff puff, samosa, spring roll, gizzard, and mosa in one cheerful tray.",
        price: "₦3,500",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD13wjldsUYnljaRUs82hSesdET4oP0f7S6BJrEXX-etLewrZU4D3AFOwymzf3zPUbq2qQIAOACGWjyq4NjToBE-I-b9B4p99FSwBWPfZ0y3mM_szH9C-Vsprlnh5uCjyAnnXDFBeT9CFas7SFfVFPFJ1WBL3H7Itje0EWkGc77WrD0NrjNqZJGHyyCoZVtlgFo9LM4S8vrDwUoB-0VzB7JUsGGcOMFBOPc9mMNAC4DZEv_448weoaWA4DA35ue60jQwPwwhzMj0gzp",
        imageAlt: "Platter of Nigerian small chops with samosas and puff puff",
      },
      {
        name: "Spicy Beef Samosas",
        description: "Six crisp pastries filled with spicy beef and aromatic seasoning.",
        price: "₦2,200",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCnzbqOnYI5d0b_mFZe0PrnAO9Jgxss_QyAeIcjNkIeIQ_CceSdlD9W4fKw2qzBdv3okNZDHzS1Vf3P0Xd_MAhLoxAHjihJkVUXlO2BrHEVRtS7PODf6OvkGPhyVtLEkl-bzGz4Tg-x-nNRQb07WPI5tMSsU-JeR2VvjcAh82XjxFjksJ_JuPixefus8Y-F3YKwq8CtB710oPCZsGXh1DB1Yyc5T5iL0S2CfJRqsYRwdkCzgtWua1skNtshuCuGoX1bEYunVVX2GH0w",
        imageAlt: "Crispy golden fried samosas",
      },
      {
        name: "Signature Puff Puff",
        description: "Twelve soft, golden, slightly sweet puffs made for sharing.",
        price: "₦1,500",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCqmnhryntFQLW8vupN-wjLbNYL2OM35K2k3-uE3cIiEFR8KA6-AFz6u17WJOAgRd3OSZ1jpxwSMIfhb3KBjr_EcpX1E6NsoF7pF_Q-1RK4DFC3KQJSpCTPBO-Y_N3CeNBnFuvin1xxPtG3kZt6tKJgnfEyZ1JGjD7-X2s5YVdKOTOdOJjBJMQLfKloe3reL-BZTCSx1Y5_3vC7XIPiwIJ1xsHPJHDDqCApeRR0Aa6p6uwa9eJFsf3PWsMwkckBdslC82fUIDMGP-3g",
        imageAlt: "Golden brown fried puff puff balls",
      },
      {
        name: "Peppered Snails",
        description: "Large snails tossed in a glossy pepper sauce that lands with proper heat.",
        price: "₦5,800",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBeNwMnuZ34mI-tI8EP_Wt2xK1K7VjjHaJzj2e1uXv3H1T_jEdGMasWfkDoLVxvWiMxBlXd9Zna2KGZpC0-QFm3HNqI2AnLlXNuiJ_tDwDI8aXi9xu2czOWCF_VgEI-CLrbVzDFKh3zJu8Tf6eC78cZo9YX3qnfCpZ30h258RiHAzVYDHikwVaalb09aI_HS9xrfqIslXd20ysLZ20BuXE3X2XI_4alF1sPXb4CfTbbIZivhz9N6mRfRzJPxe-dNNYl9ZnxofLKNzpK",
        imageAlt: "Peppered snail skewers",
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    description: "Refreshing pours that sit well with spice, smoke, and heat.",
    layout: "compact",
    items: [
      {
        name: "Chapman Cooler",
        description: "A cold, bittersweet classic with citrus, cucumber, and Lagos energy.",
        price: "₦2,000",
          image: "/images/drinks/chapman-cooler.jpeg",
          imageAlt: "Glass of chapman cooler served chilled with citrus garnish",
      },
      {
        name: "Zobo Splash",
        description: "House-brewed hibiscus drink with pineapple, ginger, and clove.",
        price: "₦1,400",
          image: "/images/drinks/zobo-splash.jpeg",
          imageAlt: "Refreshing glass of zobo splash with deep red hibiscus drink",
      },
      {
        name: "Tiger Nut Latte",
        description: "Creamy chilled kunnu aya blended for a smooth modern finish.",
        price: "₦2,300",
          image: "/images/drinks/tiger-nut-latte.jpeg",
          imageAlt: "Creamy tiger nut latte served cold in a modern glass",
      },
      {
        name: "Fresh Pineapple Ginger",
        description: "Bright tropical juice with a gentle ginger kick.",
        price: "₦1,800",
          image: "/images/drinks/fresh-pineapple-ginger.jpeg",
          imageAlt: "Fresh pineapple ginger drink poured into a chilled glass",
      },
    ],
  },
  {
    id: "specials",
    title: "Specials",
    description: "High-intent picks for group orders, celebrations, and office trays.",
    layout: "grid",
    items: [
      {
        name: "Smokey Party Tray",
        description: "Big-tray jollof, grilled chicken, and plantain prepared for family or office sharing.",
        price: "₦18,000",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBE2GkGFI4x6nUZwmZa_bt3C3RjLn6ULxSB6feJise2gOK3oDnoUzTWTlt1SQGHvi929GoFPWeWu4VEeiFavjqt9C9v0x1xWdKAWfZjKVFNQ0Tbe2GfwAJQFr0H8W_02paLIEhshBsl2YbnxyNHKxp0FCVlwQznmY8_Bc61E_0t4i1JlAZ_sxz-fgl4oth-cKsi1gH2E6jW3OJPfA3KUfrIktqy3W7WT35a_cPC9lAWMk7TWjaXMh5DQyCcZk6ymnbNk-70ES0VaB6d",
        imageAlt: "Premium close up of smoky Nigerian jollof rice with roasted chicken",
        badge: "Group Order",
      },
      {
        name: "Weekend Seafood Combo",
        description: "Croaker, prawns, grilled plantain, and signature sauce for indulgent weekend tables.",
        price: "₦15,500",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBsG5vrXJuTm_OSmswmeJT-EAIA6xfbCFewbWo2nB0ocVgs7Sonizhh5Ssfa2DM6KhXUUgOvA9jHQhXvB4s2GmmD9zPovyrIairV8vYb3P5PxM-vHj2gHdVjqPnl_Dabadq_L5YZlcNoq3fbXAI0dRnJgAxep_nmIGuRoB5Ho5HDhdEyZq-pkzsETBafxJyO84AytUsVbJCdrRaUCEfJJ-TkWlIHLZXBrkG_KkkOgILRF1GJFIkkBZeSCIsCTZEVnUdRc5Hhq_JVyWJ",
        imageAlt: "Spicy grilled fish with roasted plantain",
      },
      {
        name: "Office Lunch Bowl Set",
        description: "Twelve assorted rice bowls designed for meetings, launches, and team lunches.",
        price: "₦28,000",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCpZWQ0uHOhXfW8ExFsLDsPpBiBh2jQBY7UDo7Lzfxcu5SGZWNnvtSupP5Yf7EnhMsvd9gw03Q898n9zvWg7LXstiaWx4SP4PB6OcjOZW1xpGqgkBTIDmj1zio7sQfTBT-Lj_5nSGzgSnMEhyV29IAdUKuYpnsOCwrH7pGVEk1ZMN8i_hpRwp2pMFr5k2Rx7Q0MRvyK3TrKwSrBz1Jdtdp0UwYTaMYtEiKLWWFx0mAsvUxBSc79RMALM3yL8UBYRjTidQDszIgaNpWl",
        imageAlt: "Traditional Nigerian fried rice with mixed vegetables and prawns",
      },
    ],
  },
];

export const galleryItems = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA_jYvtq0KdV6NeA3hiSkcBBIZmtbkPuoIa9mKgfACdwc7YafMVP1t8CyQ-Es0AUCnN7hZFayWxx6jLXLJ9draSJg5fZBqwtX4S36om1bbW0Ma66lFdzHcLQrcueOoIIOZMZbuORpAieC7CBodcjRFjKGzN5kp2ACDLLRNtu6iQkZlP2d0fGFt8lxzeGcgTGaO70TCj6IN7oUnbIcP-latyDKRnxRUvh7zPwIbG4x3dbRGnJb9ImK2QLD6W4M239HQJRyFRc3glbknI",
    alt: "Glistening suya platter with fresh garnish and spices",
    span: "col-span-2 row-span-2",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDD7UZ-elH6kt2WoLkHlEVl-RSi3y_C9TKYOT7Qb-4v3HE1gpnp67nXxkxq3ff1p2DLuVb71g6l4eX6nzMF7Dn4GWsz3IA6IptmaVzSq-4aygcUuRRM0totogZ6GRbOnBNkIIlCzcYjwxS9SlbZj--3AEykLz-Ui662bYI5j7oipN_R7FLoenkK2BCPe2VmcCQkA_aXrGGJfYK8OrVeGOcu1fGwT3SNZrQybB7zAVbSofAbOKWdUPZR0F69NzDhWrFfNAO5BkbtbK3r",
    alt: "Chef preparing authentic Nigerian jollof rice in kitchen",
    span: "col-span-1",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAK28wy6wmmYjQ1DFENj1fyWST5HjbgAYuFEERR4kTti9_95OS4xKWYYBuOh1MFkZZLD4WKCP1yduRxhk0zdulyVB6-i2BpQRxmoBSWA-HoUD7R7GAZK1Y5QcbQkKAVuoZ2P49ljHnpGucVNINLT1J9dljjKdyxy3IMyAR2SZqUmXRnMtd7AHJFwF2_2Y_qeDIv2g8GcaVKkA_pv3swneJZzpnrRjz8wN_oS70TtL7zW3GU8DdWddUbKrc_C9MgVbUinBRIZql5I_s0",
    alt: "Modern cocktail bar area with ambient lighting",
    span: "col-span-1",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDeZmORw2UwZrwU7wax8Jmi4hUae63TbOrVLj9Mt1SFRylBmkyDT3jnuKVO5foSTToQYAvTS6lyY2lNLp3wB5vg0YMnP0ks5HcZCTon8RHcMbzKonSt25O5RbELY_nCslqmvD445qNP74yfHRiExQ9NIueuZk413LsN5q9jD1pmu4OwtBUFKZA5zPfde0D5KlFDalJTHrTiRKtuMUolJ9emKM2NIIlG85MeV3-uBzjWdEdQA1bYxfse-5EuHBbN8__fy8MsVuOQVd-N",
    alt: "Warm restaurant seating area with geometric patterns",
    span: "col-span-2",
  },
];
