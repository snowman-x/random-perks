function array_chunk(array, size) {
    return array.reduce((newArray, _, i) => (i % size ? newArray : [...newArray, array.slice(i, i + size)]), []);
}

function get_survivor_perks() {
    return [
        { src: './images/redHerring.png', name: 'おとり' },
        { src: './images/wellMakeIt.png', name: 'きっとやり遂げる' },
        { src: './images/lithe.png', name: 'しなやか' },
        { src: './images/WereGonnaLiveForever.png', name: 'ずっと一緒だ' },
        { src: './images/adrenaline.png', name: 'アドレナリン' },

        { src: './images/aftercare.png', name: 'アフターケア' },
        { src: './images/windowsOfOpportunity.png', name: 'ウィンドウズ・オブ・オポチュニティ' },
        { src: './images/offTheRecord.png', name: 'オフレコ' },
        { src: './images/Counterforce.png', name: 'カウンターフォース' },
        { src: './images/plunderersInstinct.png', name: 'コソ泥の本能' },

        { src: './images/saboteur.png', name: 'サボタージュ' },
        { src: './images/Flashbang.png', name: 'スタングレネード' },
        { src: './images/balancedLanding.png', name: 'スマートな着地' },
        { src: './images/selfCare.png', name: 'セルフケア' },
        { src: './images/soulGuard.png', name: 'ソウルガード' },


        { src: './images/danceWithMe.png', name: 'ダンス・ウィズ・ミー' },
        { src: './images/slipperyMeat.png', name: 'ツルツルとした肉体' },
        { src: './images/technician.png', name: 'テクニシャン' },
        { src: './images/distortion.png', name: 'ディストーション' },
        { src: './images/dejaVu.png', name: 'デジャヴ' },

        { src: './images/DeadHard.png', name: 'デッド・ハード' },
        { src: './images/flipFlop.png', name: 'フリップ・フロップ' },
        { src: './images/breakdown.png', name: 'ブレイクダウン' },
        { src: './images/buckleUp.png', name: 'ベルトを締めろ！' },
        { src: './images/boilOver.png', name: 'ボイルオーバー' },

        { src: './images/secondWind.png', name: 'リニューアル' },
        { src: './images/leader.png', name: 'リーダー' },
        { src: './images/unbreakable.png', name: '不滅' },
        { src: './images/borrowedTime.png', name: '与えられた猶予' },
        { src: './images/premonition.png', name: '予感' },


        { src: './images/forThePeople.png', name: '人々のために' },
        { src: './images/sprintBurst.png', name: '全力疾走' },
        { src: './images/empathy.png', name: '共感' },
        { src: './images/innerStrength.png', name: '内なる回復' },
        { src: './images/spineChill.png', name: '凍りつく背筋' },

        { src: './images/FastTrack.png', name: '出世街道' },
        { src: './images/detectivesHunch.png', name: '刑事の直感' },
        { src: './images/powerStruggle.png', name: '勢力争い' },
        { src: './images/clairvoyance.png', name: '千里眼' },
        { src: './images/soleSurvivor.png', name: '唯一の生存者' },

        { src: './images/blastMine.png', name: '地雷爆破' },
        { src: './images/tenacity.png', name: '執念' },
        { src: './images/objectOfObsession.png', name: '執念の対象' },
        { src: './images/SmashHit.png', name: '大ヒット' },
        { src: './images/vigil.png', name: '寝ずの番' },


        { src: './images/smallGame.png', name: '小さな獲物' },
        { src: './images/hope.png', name: '希望' },
        { src: './images/poised.png', name: '平常心' },
        { src: './images/NoMither.png', name: '弱音はナシだ' },
        { src: './images/stakeOut.png', name: '張り込み' },

        { src: './images/anyMeansNecessary.png', name: '強硬手段' },
        { src: './images/BiteTheBullet.png', name: '忍苦の時' },
        { src: './images/luckyBreak.png', name: '怪我の功名' },
        { src: './images/boonShadowStep.png', name: '恵み：シャドウステップ' },
        { src: './images/boonExponential.png', name: '恵み：指数関数' },

        { src: './images/boonCircleOfHealing.png', name: '恵み：癒しの輪' },
        { src: './images/openHanded.png', name: '手札公開' },
        { src: './images/overcome.png', name: '打開策' },
        { src: './images/repressedAlliance.png', name: '抑圧の同盟' },
        { src: './images/RookieSpirit.png', name: '新人魂' },


        { src: './images/correctiveAction.png', name: '是正処置' },
        { src: './images/aceInTheHole.png', name: '最後の切り札' },
        { src: './images/proveThyself.png', name: '有能の証明' },
        { src: './images/appraisal.png', name: '査定' },
        { src: './images/botanyKnowledge.png', name: '植物学の知識' },

        { src: './images/deception.png', name: '欺き' },
        { src: './images/decisiveStrike.png', name: '決死の一撃' },
        { src: './images/betterTogether.png', name: '状況認識' },
        { src: './images/autodidact.png', name: '独学者' },
        { src: './images/thisIsNotHappening.png', name: '痛みも気から' },

        { src: './images/babySitter.png', name: '監視者' },
        { src: './images/wakeUp.png', name: '目を覚ませ！' },
        { src: './images/headOn.png', name: '真っ向勝負' },
        { src: './images/breakout.png', name: '突破' },
        { src: './images/quickAndQuiet.png', name: '素早く静かに' },


        { src: './images/bond.png', name: '絆' },
        { src: './images/leftBehind.png', name: '置き去りにされた者' },
        { src: './images/builtToLast.png', name: '耐久設計' },
        { src: './images/fixated.png', name: '自己認識' },
        { src: './images/Self-Preservation.png', name: '自己防衛' },

        { src: './images/desperateMeasures.png', name: '苦肉の策' },
        { src: './images/mettleOfMan.png', name: '英雄の奮起' },
        { src: './images/bloodPact.png', name: '血の協定' },
        { src: './images/kindred.png', name: '血族' },
        { src: './images/camaraderie.png', name: '親近感' },

        { src: './images/deliverance.png', name: '解放' },
        { src: './images/noOneLeftBehind.png', name: '誰も見捨てはしない' },
        { src: './images/pharmacy.png', name: '調剤学' },
        { src: './images/alert.png', name: '警戒' },
        { src: './images/upTheAnte.png', name: '掛け金のレイズ' },


        { src: './images/Resurgence.png', name: '起死回生' },
        { src: './images/lightweight.png', name: '身軽' },
        { src: './images/resilience.png', name: '逆境魂' },
        { src: './images/visionary.png', name: '透視家' },
        { src: './images/solidarity.png', name: '連帯感' },

        { src: './images/streetwise.png', name: '都会の生存術' },
        { src: './images/urbanEvasion.png', name: '都会の逃走術' },
        { src: './images/ironWill.png', name: '鋼の意志' },
        { src: './images/darkSense.png', name: '闇の感覚' },
        { src: './images/diversion.png', name: '陽動' },

        { src: './images/calmSpirit.png', name: '魂の平穏' },
    ];
}

function get_killer_perks() {
    return [
        { src: './images/sloppyButcher.png', name: 'ずさんな肉屋' },
        { src: './images/coupDeGrace.png', name: 'とどめの一撃' },
        { src: './images/bamboozle.png', name: 'まやかし' },
        { src: './images/ironMaiden.png', name: 'アイアンメイデン' },
        { src: './images/popGoesTheWeasel.png', name: 'イタチが飛び出した' },

        { src: './images/eruption.png', name: 'イラプション' },
        { src: './images/generatorOvercharge.png', name: 'オーバーチャージ' },
        { src: './images/tinkerer.png', name: 'ガラクタいじり' },
        { src: './images/Starstruck.png', name: 'スターに憧れて' },
        { src: './images/deathbound.png', name: 'デスバウンド' },


        { src: './images/deadlock.png', name: 'デッドロック' },
        { src: './images/dragonsGrip.png', name: 'ドラゴンの掌握' },
        { src: './images/knockOut.png', name: 'ノックアウト' },
        { src: './images/BBQAndChili.png', name: 'バーベキュー＆チリ' },
        { src: './images/coulrophobia.png', name: 'ピエロ恐怖症' },


        { src: './images/fireUp.png', name: 'ファイヤー・アップ' },
        { src: './images/franklinsLoss.png', name: 'フランクリンの悲劇' },
        { src: './images/rememberMe.png', name: 'リメンバー・ミー' },
        { src: './images/discordance.png', name: '不協和音' },
        { src: './images/grimEmbrace.png', name: '不吉な包囲' },

        { src: './images/unnervingPresence.png', name: '不安の元凶' },
        { src: './images/mindBreaker.png', name: '不安を煽る者' },
        { src: './images/enduring.png', name: '不屈' },
        { src: './images/infectiousFright.png', name: '伝播する怖気' },
        { src: './images/lightborn.png', name: '光より出でし者' },

        { src: './images/hangmansTrick.png', name: '処刑人の妙技' },
        { src: './images/HexCrowdControl.png', name: '呪術：クラウドコントロール' },
        { src: './images/hexPentimento.png', name: '呪術：ペンティメント' },
        { src: './images/hexUndying.png', name: '呪術：不死' },
        { src: './images/hexRetribution.png', name: '呪術：報復' },


        { src: './images/HuntressLullaby.png', name: '呪術:女狩人の子守唄' },
        { src: './images/thrillOfTheHunt.png', name: '呪術：狩りの興奮' },
        { src: './images/hexPlaything.png', name: '玩具' },
        { src: './images/ruin.png', name: '呪術：破滅' },
        { src: './images/theThirdSeal.png', name: '呪術：第三の封印' },

        { src: './images/hexBloodFavor.png', name: '呪術：血の恩恵' },
        { src: './images/noOneEscapesDeath.png', name: '呪術:誰も死から逃れられない' },
        { src: './images/devourHope.png', name: '呪術:貪られる希望' },
        { src: './images/hauntedGround.png', name: '呪術：霊障の地' },
        { src: './images/stridor.png', name: '喘鳴' },

        { src: './images/whispers.png', name: '囁き' },
        { src: './images/overwhelmingPresence.png', name: '圧倒的存在感' },
        { src: './images/imAllEars.png', name: '地獄耳' },
        { src: './images/corruptIntervention.png', name: '堕落の介入' },
        { src: './images/gearHead.png', name: '変速機' },


        { src: './images/nemesis.png', name: '天誅' },
        { src: './images/playWithYourFood.png', name: '弄ばれる獲物' },
        { src: './images/forcedPenance.png', name: '強制苦行' },
        { src: './images/spiesFromTheShadows.png', name: '影の密偵' },
        { src: './images/deerstalker.png', name: '忍び寄る者' },

        { src: './images/hatred.png', name: '怨恨' },
        { src: './images/spiritFury.png', name: '怨霊の怒り' },
        { src: './images/scourgeHookPainResonance.png', name: '悶絶のフック：共鳴する苦痛' },
        { src: './images/scourgeHookGiftOfPain.png', name: '悶絶のフック：苦痛という名の贈り物' },
        { src: './images/bitterMurmur.png', name: '憎悪の囁き' },

        { src: './images/thrillingTremors.png', name: '戦慄' },
        { src: './images/predator.png', name: '捕食者' },
        { src: './images/surge.png', name: '景気づけ' },
        { src: './images/saveTheBestForLast.png', name: '最後のお楽しみ' },
        { src: './images/lethalPursuer.png', name: '死を呼ぶ追跡者' },


        { src: './images/deadManSwitch.png', name: '死人のスイッチ' },
        { src: './images/thatanophobia.png', name: '死恐怖症' },
        { src: './images/zanshinTactics.png', name: '残心の戦術' },
        { src: './images/dyingLight.png', name: '消えゆく灯' },
        { src: './images/Hoarder.png', name: '溜め込み屋' },

        { src: './images/unrelenting.png', name: '無慈悲' },
        { src: './images/trailOfTorment.png', name: '煩悶のトレイル' },
        { src: './images/madGrit.png', name: '狂気の根性' },
        { src: './images/insidious.png', name: '狡猾' },
        { src: './images/BeastOfPrey.png', name: '猛獣' },

        { src: './images/monstrousShrine.png', name: '異形の祭壇' },
        { src: './images/surveillance.png', name: '監視' },
        { src: './images/aNursesCalling.png', name: '看護師の使命' },
        { src: './images/TerritorialImperative.png', name: '縄張り意識' },
        { src: './images/agitation.png', name: '興奮' },


        { src: './images/distressing.png', name: '苦悶の根源' },
        { src: './images/bloodEcho.png', name: '血の共鳴' },
        { src: './images/bloodWarden.png', name: '血の番人' },
        { src: './images/bloodhound.png', name: '血の追跡者' },
        { src: './images/NoWayOut.png', name: '袋小路' },

        { src: './images/monitorAndAbuse.png', name: '観察＆虐待' },
        { src: './images/Oppression.png', name: '迫害' },
        { src: './images/makeYourChoice.png', name: '選択は君次第だ' },
        { src: './images/brutalStrength.png', name: '野蛮な力' },
        { src: './images/ironGrasp.png', name: '鋼の握力' },

        { src: './images/cruelConfinement.png', name: '閉所恐怖症' },
        { src: './images/darkDevotion.png', name: '闇の信仰心' },
        { src: './images/shadowborn.png', name: '闇より出でし者' },
        { src: './images/furtiveChase.png', name: '隠密の追跡' },
        { src: './images/hysteria.png', name: '集団ヒステリー' },
    ];
}

function create_perk_list(perks) {
    while (perks.length % 5) {
        perks.push({
            src: './images/transparent.png',
            name: '',
        });
    }

    const all_perk_container = document.getElementById('all_perk_container');
    all_perk_container.innerHTML = '';
    const pages = array_chunk(perks, 15);
    let pageNumber = 1;
    pages.forEach(page => {
        const perk_page = document.createElement('div');
        perk_page.classList.add('perk_page');

        const h3 = document.createElement('h3');
        h3.innerText = "Page " + pageNumber;
        perk_page.append(h3);

        const rows = array_chunk(page, 5);
        let rowNumber = 1;
        rows.forEach(row_perks => {
            const perk_list = document.createElement('div');
            perk_list.classList.add('perk_row');

            if (rowNumber === 1) {
                perk_list.classList.add('perk_row_top');
            } else if (rowNumber === 2) {
                perk_list.classList.add('perk_row_middle');
            } else {
                perk_list.classList.add('perk_row_bottom');
            }

            let position = 1;
            row_perks.forEach(perk => {
                const div = document.createElement('div');
                const img = document.createElement('img');
                img.src = perk.src;
                img.alt = perk.name;
                img.classList.add('perk_image');
                perk.img = img;
                perk.position = pageNumber + 'ページ<br>' + rowNumber + '段目<br>左から' + position + '個目';
                div.append(img);
                perk_list.append(div);
                position++;
            });

            perk_page.append(perk_list);
            rowNumber++;
        });

        all_perk_container.append(perk_page);
        pageNumber++;
    });
}

function get_random(min, max) {
    return Math.trunc(Math.random() * (max + 1 - min)) + min;
}

function resetImages() {
    const ids = [
        'first_perk_area',
        'second_perk_area',
        'third_perk_area',
        'fourth_perk_area',
    ];

    ids.forEach(id => {
        const area = document.getElementById(id);
        const image = area.querySelector('img');
        image.src = './images/pgjsf.png';
        image.alt = '';

        const h3 = area.querySelector('h3');
        h3.innerText = '---';
    });
}

function choice(perks) {
    resetImages();
    create_perk_list(perks);

    const min = 0;
    const max = perks.length;
    const selected = [];
    while (selected.length < 4) {
        const index = get_random(min, max);
        if (selected.includes(index)) {
            continue;
        }

        const perk = perks[index];
        if (!perk || !perk.name || perk.name === '') {
            continue;
        }

        perk.img.classList.add('selected');

        let id = '';
        if (selected.length === 0) {
            id ='first_perk_area';
        } else if (selected.length === 1) {
            id ='second_perk_area';
        } else if (selected.length === 2) {
            id ='third_perk_area';
        } else if (selected.length === 3) {
            id ='fourth_perk_area';
        }

        if (!id) {
            selected.pop();
            continue;
        }

        selected.push(index);

        const area = document.getElementById(id);
        const image = area.querySelector('img');
        image.src = perk.src;
        image.alt = perk.name;

        const h3 = area.querySelector('h3');
        h3.innerText = perk.name;

        const h4 = area.querySelector('h4');
        h4.innerHTML = '<span>' + perk.position + '</span>';
    }
}