<script setup>
import { storeToRefs } from "pinia";
import { useChangeLangStore } from "@/stores/changeLangStore.js";

// pinia language
const changeLangStore = useChangeLangStore();
const { localLang } = storeToRefs(changeLangStore);
</script>

<template>
  <div class="p-2 md:p-10">
    <div class="container max-w-4xl">
      <template v-if="localLang === 'zh_TW'">
        <article class="text-base leading-loose font-light">
          您在本網站下單之前，應當認真閱讀以下條款和條件（“《一般條款》”）。如您通過本網站購買我們的商品或服務的，應當遵守《一般條款》
          的約定。<br /><br />

          Bottigaemo
          保留在不經通知的情況下隨時修改《一般條款》的權利。請您在下單前檢查最新版本的《一般條款》。如您在我們發佈對《一般條款》變更後訂購產品，即您確認您接受《一般條款》的變更條款。
          本網站所顯示的產品僅向自然人，僅為個人需要且與商業活動無直接關係的最終購買者銷售。<br /><br />

          您確認，在您使用本網站下單前，您已年滿 18
          周歲且具有訂立合同的民事行為能力。<br /><br />

          <h2 class="text-2xl lg:text-3xl text-center my-5 lg:my-10">
            1. 訂單及接受
          </h2>
          <h3 class="text-xl lg:text-2xl text-center my-3 lg:my-6">
            A. 訂購流程
          </h3>
          <p>
            您選擇您想要訂購的產品後，點擊“立即訂購”或“立即預訂”按鈕。被選中的產品將放入您的“購物袋”。您可以在任何時候通過點擊“購物袋”按鈕來查看您所選擇的產品，並刪除或添加任何產品。<br /><br />

            當您選擇完畢並希望確認您“購物袋”中的內容時，您可以繼續點擊“結賬”並按照說明進行操作。您將被要求輸入您的姓名，居住地址，電子郵件地址和電話號碼，以及收貨地址。<br /><br />
          </p>
          <h3 class="text-xl lg:text-2xl text-center my-3 lg:my-6">
            B. 支付流程
          </h3>
          <p>
            您的訂單資訊被輸入並確認後，產品價格和任何最終的費用將自動顯示。請您在確認訂單之前驗證您的選擇。如果您同意您的選擇和其價格，請點擊“繼續付款”按鈕。您將被要求輸入您的付款細節。通過點擊“繼續付款”按鈕，您購物袋中的產品將生成有法律約束力的訂單。<br /><br />

            所有訂單需在下單時付款。我們支持支付寶、美國運通、日財卡、萬事達、銀聯、Visa信用卡以及微信支付等方式進行支付。<br /><br />
          </p>
          <h3 class="text-xl lg:text-2xl text-center my-3 lg:my-6">
            C. 訂單確認
          </h3>
          <p>
            如果訂單已由 Bottigaemo
            通過確認電子郵件確認，則訂單已成功完成。本確認電子郵件並不構成
            Bottigaemo
            對客戶的訂單的接受。所有訂單將視是否有貨及接受與否而定。我們保留拒絕接受您提交的訂單的權利。該等拒絕接受可能由如下事實導致，例如：（i）網站顯示某產品，但該產品缺貨；（ii）網站上顯示的產品存在明顯的價格錯誤；（iii）我們無法獲得您的付款授權；（iv）產品的運送限制。我們將及時通知您無法供應產品的情況，並將立即向您返還已為缺貨產品支付的任何款項。<br /><br />

            當您收到 Bottigaemo
            發送的產品已發貨的確認時，即視為購買合同已簽訂。貨物的所有權和損失和損壞的風險在交貨時轉移給客戶。<br /><br />
          </p>

          <h2 class="text-2xl lg:text-3xl text-center my-5 lg:my-10">
            2. 價格
          </h2>
          <p>
            如我們的網站所示，所有產品均按訂購時的有效價格售出。價格以台幣為單位，已包括
            Bottigaemo
            的配送費用。不論收貨地址或您的住址在哪，訂單均以台幣支付。Bottigaemo將設法支付任何關稅或任何其他類似的當地收費或稅款。任何該等關稅或類似稅費將由Bottigaemo支付，且Bottigaemo將設法向交貨國的主管部門申報任何必要的情況。<br /><br />

            Bottigaemo保留在任何時候調整產品價格的權利，但除非有明顯的價格錯誤，價格調整將不適用於您已收到確認電子郵件的任何訂單。價格有明顯錯誤的情況下，我們將儘快通知您價格問題。
            當我們通知您時，您可以取消訂單。<br /><br />
          </p>

          <h2 class="text-2xl lg:text-3xl text-center my-5 lg:my-10">
            3. 配送、退貨和報銷
          </h2>
          <h3 class="text-xl lg:text-2xl text-center my-3 lg:my-6">
            A. COVID-19 危機
          </h3>
          <p>
            為了幫助減緩 COVID-19
            的傳播，保護我們團隊成員及客戶的安全和健康，我們暫時關閉了我們的工作室和我們的精品店。您可以繼續在我們的網站進行購物。
            但請注意，由於此種特殊情況，配送延期的情形可能增加。<br /><br />
          </p>
          <h3 class="text-xl lg:text-2xl text-center my-3 lg:my-6">
            B. 配送时间
          </h3>
          <p>
            除預訂產品，我們旨在您的訂單後 3-5
            個工作日內配送您的訂單。如由於任何原因，產品在訂單確認電子郵件發出後的30日內未送達，您有權取消合同，並有權將您支付給我們的價款作為退款取回。前述退款情形不適用於預訂產品。<br /><br />

            送貨時間取決於您訂購產品的類型、產品供應情況、您的收貨地址及您選擇的配送方式。配送日期是指示性的，不應被視為嚴格的截止日期。當您“預訂”產品時，預訂產品配送時間將延長或至少不同於現有存貨的產品。因此，Bottigaemo
            可能會根據某些產品是否已被預訂以及在預訂時是否有存貨而確定不同的配送時間。<br /><br />
          </p>
          <h3 class="text-xl lg:text-2xl text-center my-3 lg:my-6">
            C. 退貨流程
          </h3>
          <h4 class="text-lg text-center my-3">1. 退貨通知</h4>
          <p>
            您有權在十四（14）日內撤銷本買賣合同而無須說明任何理由。<br /><br />

            撤銷權行使期限將在產品交付之日起的十四（14）日後屆滿。如果在一份訂單中含有多個產品且分開發貨，則十四（14）日自最後產品交付之日起算。<br /><br />

            您只需在該期限屆滿前發送有關您行使撤銷權的通知，即可滿足撤銷權行使期限的要求。如果
            Bottigaemo 通過確認電子郵件確認，則退貨成功完成。<br /><br />

            對於我們提供給用戶的定制產品，不得行使撤銷權或退貨。<br /><br />

            僅在產品處於全新狀態，沒有損壞且安全標籤未受損或移除的情況下，Bottigaemo
            才接受退貨並進行退款。缺少安全標籤，或未經我們的品質團隊確認產品全新且完好無損，我們將不會考慮任何退貨。<br /><br />
          </p>
          <h4 class="text-lg text-center my-3">2. 對於產品狀況的責任</h4>
          <p>
            產品退回時必須保持與送達時相同的狀態。除確定產品的性質和特性所必需之外，您只對產品因接觸而減少的價值承擔責任。您必須確保產品完好無損，未被使用，沒有磨損或有任何方式的損壞。對於損壞、變質的產品，或其狀態明顯表明產品用於評估產品性質和特性所必需之外的用途，我們保留拒絕退貨的權利。<br /><br />
          </p>
          <h4 class="text-lg text-center my-3">3. 退貨產品的退款</h4>
          <p>
            如您退回您的產品，我們將及時且不遲於我們收到退貨產品之日起的十四（14）日內向您退回我們收到的您所有付款（因您選擇除我們提供的最便宜的標準配送方式以外的其他配送方式而產生的附加費用除外）。除非您另行明確同意，我們將使用您在初始交易中使用的相同付款方式進行退款；在任何情況下，您均不會因此退款而產生任何費用。<br /><br />
          </p>

          <h2 class="text-2xl lg:text-3xl text-center my-5 lg:my-10">
            4. 檢查及瑕疵
          </h2>
          <h3 class="text-xl lg:text-2xl text-center my-3 lg:my-6">
            A. 瑕疵通知
          </h3>
          <p>
            您必須在交貨時對產品進行檢查，並及時書面通知任何不合格或瑕疵情形。該通知應及時發出，即在交貨後五個工作日內發出，或，若在正常檢查中瑕疵不明顯，則於不遲於瑕疵被發現後三個工作日內發出。若您沒有提供該等通知，則視為您已認可該產品。<br /><br />
          </p>
          <h3 class="text-xl lg:text-2xl text-center my-3 lg:my-6">
            B. 瑕疵產品換貨
          </h3>
          <p>
            若產品不合格或有瑕疵，您有權要求修理或更換無瑕疵產品。若客戶要求修理或換貨會產生不合理的費用，我們有權拒絕該等修理或換貨。若產品在合理期限內無法修理或更換，您有權根據適用法律解除銷售協議。<br /><br />
          </p>
        </article>
      </template>
      <template v-else-if="localLang === 'en'">
        <article class="text-base leading-loose font-light">
          Please read these Conditions of Sale carefully. These Conditions of
          Sale are applicable to any order placed through the Sales Channels,
          and include an agreement to arbitrate any disputes on an individual
          basis. Please note that before placing an order for products or
          services, you will be asked to agree to these Conditions of Sale. If
          you do not agree to these Conditions of Sale, then you will not be
          able to order any products or services through the Sales Channels.
          Sales concluded in person through physical points of sale (such as our
          retail boutiques) not using Pay-by-Link or third parties (such as
          authorized retailers) are not subject to these Conditions of Sale.<br /><br />

          <h2 class="text-2xl lg:text-3xl text-center my-5 lg:my-10">
            1. Order Process
          </h2>
          <p>
            For orders placed by phone, the Maison associate will assist you in
            placing your order and will verbally ask you to confirm the details
            of your order.<br /><br />

            For orders placed through the Platforms, desired products should be
            placed in the Shopping bag (subject to availability and quantity
            limits) and you should proceed to “Checkout” when ready to purchase.
            During the checkout process, you should review your shopping bag to
            confirm all details prior to completing your purchase. Except for
            personalized products (as further detailed above), product is not
            guaranteed as available for purchase until the order is placed and
            you receive a written confirmation e-mail.<br /><br />

            We reserve the right, in our sole discretion, to refuse, cancel and
            terminate orders at any time on reasonable grounds. For example, we
            may refuse, terminate or cancel your order if there is an ongoing
            dispute concerning payment of a prior order or if we suspect, in our
            sole discretion, that you have engaged in (i) fraudulent activities;
            (ii) the import of product activities which we have not intended; or
            (iii) have otherwise violated these Conditions of Sale.<br /><br />
          </p>

          <h2 class="text-2xl lg:text-3xl text-center my-5 lg:my-10">
            2. Prices, Taxes and Shipping Costs
          </h2>
          <p>
            All prices shown or quoted by the applicable Sales Channels are in
            U.S. Dollars unless otherwise stated and exclude sales tax, shipping
            costs and other taxes unless otherwise stated. Sales, use or other
            taxes will vary based on the location to which products are being
            delivered. You should check updated prices and currency
            carefully.<br /><br />

            Shipping and handling costs, if any, are described in the Shipping
            Policy below or by the applicable Sales Channels. Shipping and
            handling costs will only be added to the product price after you
            have chosen your delivery options and will be summarised before you
            are asked to confirm and place your order.<br /><br />

            We take reasonable care that the prices of products and delivery
            costs are correct when the relevant information is communicated to
            you via the Sales Channels. However, it is possible that, despite
            our reasonable efforts, some of the products offered or shipping and
            handling costs may be incorrectly priced and/or applicable laws have
            changed that may impact taxes associated with your order. If any of
            the products or any delivery costs are incorrectly priced and/or a
            different tax applies, we will contact you as soon as possible to
            reconfirm the order and new amounts. If we are unable to contact you
            using the contact details you have provided during the order
            process, we will cancel the order and notify you in writing. If we
            mistakenly accept and process your order where a pricing or delivery
            cost error occurs, we may cancel the order and refund you any sums
            you have paid.<br /><br />
          </p>

          <h2 class="text-2xl lg:text-3xl text-center my-5 lg:my-10">
            3. Payment
          </h2>
          <p>
            We accept the payment methods identified in the order process via
            the Sales Channels. When ordering, you will need to provide your
            payment details through the appropriate Sales Channels. Depending on
            the means of payment, we may require additional information,
            including specific forms of identification. All payment card holders
            are subject to validation check and authorization by the card
            issuer. If your payment card issuer refuses to authorize payment to
            us, you will need to contact your card issuer directly to solve this
            problem.<br /><br />

            Other payment methods may also be subject to validation checks and
            authorization by the payment system providers. You expressly
            authorize us to perform security checks, where we deem necessary, to
            transmit or to obtain information (including any updated
            information) about you to or from third parties, including but not
            limited to your payment card details, to authenticate your identity,
            validate your payment card, obtain an initial payment card
            authorization, and authorize individual purchase transactions.<br /><br />

            Depending on your payment method, type, and nature of your purchase,
            your account may be immediately debited during the checkout process
            or a hold may be placed on your account for a period of time or
            until the product is shipped. Please contact the Sales Channels or
            your payment card provider for more details.<br /><br />

            Where we offer a financing option and you chose to use it to pay for
            your order, the payment and finance option will be subject to both
            these Conditions of Sale and the applicable terms and conditions of
            our finance provider, who is disclosed before or during the checkout
            process. You will have the opportunity to acknowledge and agree to
            the finance provider’s terms and conditions before confirming the
            finance option as your method of payment. Note that any selected
            product(s) and/or service(s) will be held for a limited period of
            time to permit you to complete the financing process and will be
            released if you fail to complete the purchase within the time
            limits.<br /><br />

            Where we offer you the ability to prepay for your products, either
            in full or as a partial prepayment, the prepayment will be taken
            immediately following the placement of your order and subject to the
            specific requirements communicated by the applicable Sales Channels
            during the prepayment process. Prepayments (in whole or in part) are
            non-refundable; however, prepayments shall not impact your legal
            rights under these Conditions of Sale.<br /><br />

            When using the Sales Channels, we only accept bank wire transfer for
            orders placed by telephone, and such orders are subject to an order
            approval process. We do not charge a fee for bank wire transfers;
            however, some financial institutions may charge a fee for using a
            bank wire transfer. Your order will not be processed until the
            payment has been received and confirmed by us and will be cancelled
            if the wire transfer payment is not credited into our bank account
            within seven (7) days after the order is placed.<br /><br />

            Maison is prohibited under U.S. law from making sales of its goods
            to individuals or companies designated on the Office of Foreign
            Assets Controls (“OFAC”) Specially Designated Nationals (“SDN”)
            List, or to country destinations sanctioned by the U.S. Any such
            transactions will be declined.<br /><br />
          </p>

          <h2 class="text-2xl lg:text-3xl text-center my-5 lg:my-10">
            4. Confirmation of Order & Shipment
          </h2>
          <p>
            The purchase contract is deemed to have been concluded when you
            receive a confirmation from Delvaux that the products have been
            shipped to you. Upon shipment of your order, we will send you a
            Confirmation of Order & Shipment in writing (by e-mail or
            otherwise). This Confirmation of Order & Shipment constitutes our
            acceptance of your order and indicates the existence of a binding
            sales contract, except for personalized products, where our
            confirmation email constitutes our acceptance of your order and
            indicates the existence of a binding sales contract. No agreement
            for purchase is complete until we send you a Confirmation of Order &
            Shipment.<br /><br />
          </p>
        </article>
      </template>
    </div>
  </div>
</template>
