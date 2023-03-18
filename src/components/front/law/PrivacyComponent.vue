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
          請仔細閱讀以下內容，以了解我們將如何使用您的資訊。<br />
          請注意，在使用本網站時，您可能會受到附加條款和條件的約束，例如銷售通用條款和條件，該等條款和條件可對本政策進行補充。<br /><br />
          我們的政策包含以下資訊： <br /><br />
          <ol class="list-decimal px-5">
            <li class="py-2">負責資訊處理的主體身份</li>
            <li class="py-2">我們如何收集您的資訊</li>
            <li class="py-2">我們收集了哪些資訊</li>
            <li class="py-2">Cookies</li>
          </ol>

          <h2 class="text-2xl lg:text-3xl text-center my-5 lg:my-10">
            1. 負責資訊處理的主體身份
          </h2>
          <p>
            如果您對我們的政策或我們處理您的數據的方式有任何疑問或要求，請根據下文第14節與我們聯繫。<br /><br />
            我們不接受未滿十六（16）周歲或未滿其居住國法律規定的任何其他年齡限制的人士提交的註冊或訂單，也不會在未經父母的適當同意的情況下故意收集其個人資訊。
            如果您是使用我們服務的兒童的家長或監護人，請發送電子郵件至
            service@bottigaemo.com
            查看該兒童提供的資訊，並要求刪除該資訊。我們將及時處理該問題。<br /><br />
          </p>

          <h2 class="text-2xl lg:text-3xl text-center my-5 lg:my-10">
            2. 我們如何收集您的資訊
          </h2>
          <p>
            根據您與 Bottigaemo
            的關係的性質，我們可能通過各種方式直接或間接地收集您的個人資訊：<br /><br />
          </p>
          <ul>
            <li class="py-2">
              - 填寫從實體店收到的表格（紙質表格或電子錶格）。
            </li>
            <li class="py-2">
              - 訪問我們的網站、線上應用程式或打開我們的電子郵件（例如：通過
              cookies 或類似技術）。
            </li>
            <li class="py-2">
              - 每次訪問 Bottigaemo 實體店時與我們的銷售顧問互動。
            </li>
            <li class="py-2">
              -
              通過電子郵件、電話、郵寄、留言（即時通訊應用程式）、網站、網頁表格或任何其他方式直接與我們聯繫。
            </li>
            <li class="py-2">- 進行任何與在線結賬相關的操作 。</li>
          </ul>
          <p>
            在線購買我們的產品，我們可能收集資訊，例如：當您對我們的產品和服務提出意見或評論時。
          </p>

          <h2 class="text-2xl lg:text-3xl text-center my-5 lg:my-10">
            3. 我們收集了哪些資訊
          </h2>
          <p>
            當您存取、互動或操作網站和/或服務及產品時，我們將收集和處理您的以下資料。<br /><br />
          </p>
          <ul>
            <li class="py-2">
              -
              <b class="font-bold">個人身份資料</b>
              （包括姓氏、姓名、電子郵件、電話號碼、出生日期、通訊位址、配送位址、居住國家，以及視需要提供的作為免稅程式的一部分的護照號碼），例如：當您在實體店填寫表格時;當您在我們的網站上購買產品時;為了驗證您的電子郵件地址以説明防止垃圾郵件、欺詐和濫用;向您發送有關
              Bottigaemo 產品和服務的資訊時;與您溝通。
            </li>
            <li class="py-2">
              - <b class="font-bold">技術資訊（電子數據）</b>
              ，包括在每次訪問我們的過程中，例如：維護我們的網站的安全並防止欺詐;管理我們的網站和內部操作，包括故障排除、數據分析、測試和研究，以及用於統計和調查目的，所收集的用於將您的電腦連接到互聯網的
              IP
              位址、瀏覽器的類型和版本、時區設置、瀏覽器外掛程式的類型和版本、操作系統和平臺、設備
              ID 等資訊。
            </li>
            <li class="py-2">
              - <b class="font-bold">對我們的系列或其他奢侈品牌的偏好</b>
              ，以及您的興趣和生活方式，以上資訊通過您在訪問我們的實體店時與我們的互動和會面收集，例如：向您提供您可能感興趣的其他服務和產品的資訊。
            </li>
            <li class="py-2">
              - <b class="font-bold">影像資料</b>
              ，在您訪問我們配備了視頻監控系統（CCTV）以保護您和 Maison
              Delvaux的實體店時收集。
            </li>
            <li class="py-2">
              -
              <b class="font-bold">與付款指令相關的資訊</b>
              （例如：姓名和其他用於識別客戶身份的詳細資訊、付款交易目的地國家、付款交易金額和幣種;當該等銀行帳戶有
              IBAN代碼時，國際銀行帳戶號碼（"IBAN"），或在每種情況下對應的銀行帳戶代碼），例如用於驗證和執行與您的付款相關的金融交易。
            </li>
            <li class="py-2">
              -
              <b class="font-bold">與雇傭相關的個人資訊</b>
              （如雇傭責任、姓名、工作地點），當您通過我們的網站或第三方網站（如
              LinkedIn）提出申請時，您需要提供前述資訊以審閱和評估您的申請。
              以您在第三方網站上發布的資訊，或透過回覆/評論，或當您透過電子郵件、郵寄、電話或任何其他通訊方式聯絡我們，例如回答您的所有詢問/問題時，關於您的普通資訊。
            </li>
            <li class="py-2">
              - 以及根據一般銷售條款和條件需要處理的關於貴方的任何其他資訊。
            </li>
          </ul>

          <h2 class="text-2xl lg:text-3xl text-center my-5 lg:my-10">
            4. Cookies
          </h2>
          <p>
            我們的網站使用 cookies。
            當您瀏覽我們的網站時，它們幫助我們為您提供良好的用戶體驗並進一步完善。
            有關 cookies 的更多資訊以及我們為什麼使用他們，請參考我們的 Cookie
            政策。<br /><br />
          </p>
        </article>
      </template>
      <template v-else-if="localLang === 'en'">
        <article class="text-base leading-loose font-light">
          Please read the following carefully to understand how we will use your
          information.

          <br />
          Please note that when using this website you may be subject to
          additional Terms and Conditions, such as General Terms and Conditions
          of Sale, which may supplement this Policy.<br /><br />
          Our Policy informs you about:<br /><br />
          <ol class="list-decimal px-5">
            <li class="py-2">
              The identity of the entity responsible for processing
            </li>
            <li class="py-2">How we collect your information</li>
            <li class="py-2">The information we collect</li>
            <li class="py-2">Cookies</li>
          </ol>

          <h2 class="text-2xl lg:text-3xl text-center my-5 lg:my-10">
            1. The identity of the entity responsible for processing your
            information
          </h2>
          <p>
            If you have any questions or requests regarding our Policy or the
            way we process your data in general, please contact us via section
            14 below.<br /><br />
            We do not knowingly collect personal information from children who
            is 13-16 years old without proper parental consent. If you are a
            parent or guardian of a child using our services, please send us an
            email at service@bottigaemo.com to view the information provided by
            the child and require that it be deleted. We will promptly address
            the issue.<br /><br />
          </p>

          <h2 class="text-2xl lg:text-3xl text-center my-5 lg:my-10">
            2. How we collect your information
          </h2>
          <p>
            Depending on the nature of the relationship you have with
            Bottigaemo, we may collect your personal information, directly or
            indirectly, in various ways when you:<br /><br />
          </p>
          <ul>
            <li class="py-2">
              - Fill in a form (paper or electronic) received in a physical
              store .
            </li>
            <li class="py-2">
              - Visit our website, online applications or open our emails (e.g.
              through cookies or similar technologies).
            </li>
            <li class="py-2">
              - Interact with our sales advisers on each visit to a physical
              store of Bottigaemo.
            </li>
            <li class="py-2">
              - Contact us directly by email, phone, post, message (instant
              messaging applications), via our website, web form, or by any
              other means.
            </li>
            <li class="py-2">- Interact with any of our online checkouts.</li>
          </ul>
          <p>
            Purchase online products from us.We may collect information, for
            example, you give us an opinion or comment about our products and
            services.
          </p>

          <h2 class="text-2xl lg:text-3xl text-center my-5 lg:my-10">
            3. The information we collect
          </h2>
          <p>
            We collect and process the following data about you when you access,
            interact, or operate with the website and/or services and
            products.<br /><br />
          </p>
          <ul>
            <li class="py-2">
              -
              <b class="font-bold">Personal identification data</b>
              (including surname(s), given name(s), email, phone number, date of
              birth, postal address, delivery address, country of residence, and
              optionally your passport number as part of a tax-free procedure),
              e.g. when you fill in a form in a physical store; when you
              purchase a product on our website; to verify your email address to
              help prevent spam, fraud, and abuse; to send you information about
              Maison Delvaux products and services that can enhance your use of
              the service; to communicate with you.
            </li>
            <li class="py-2">
              - <b class="font-bold">Technical information (electronic data)</b>
              , including the IP address used to connect your computer to the
              internet, the type and version of the browser, the time-zone
              setting, the browser plugins’ type and versions, the operating
              system and platform, the device ID, etc. on each visit to our
              website e.g. to keep our website secure and prevent of fraud; to
              administer our website and for internal operations, including
              troubleshooting, data analysis, testing, research, and for
              statistical and survey purposes.
            </li>
            <li class="py-2">
              -
              <b
                >Preferences regarding our collections or other luxury brands</b
              >
              , as well as your interests and lifestyle during your visits to
              our physical store based on our interactions and meetings with you
              e.g. to provide you with information about other services and
              products which we offer and which may be of interest to you.
            </li>
            <li class="py-2">
              - <b class="font-bold">Image</b>
              when you visit our physical stores equipped with video
              surveillance systems (CCTV) to protect you and Maison Delvaux’s
              physical stores.
            </li>
            <li class="py-2">
              -
              <b class="font-bold">Information related to payment orders</b>
              (such as name and other details identifying the customer,
              destination country of the payment transaction, amount and
              currency of the payment transaction; International Bank Account
              Number (“IBAN”) when such bank account has an IBAN code, or the
              bank account code as corresponds in each case) e.g. to verify and
              execute financial transactions related to your payments.
            </li>
            <li class="py-2">
              -
              <b class="font-bold">Employment-related personal information</b>
              (such as employment responsibilities, name, location of
              employment) to review and evaluate your application when you apply
              via our website or a third-party site (e.g. LinkedIn).Ordinary
              information about you based on messages you post on third-party
              sites, or via comments/reviews, or when you contact us by email,
              post, telephone or any other communication channels e.g. to answer
              all your inquiries/questions
            </li>
            <li class="py-2">
              - And any other information about you that needs to be processed
              according to the General Terms and Conditions of Sale.
            </li>
          </ul>

          <h2 class="text-2xl lg:text-3xl text-center my-5 lg:my-10">
            4. Cookies
          </h2>
          <p>
            Our website uses cookies. They help us in particular to provide you
            with a good experience when you browse our website and also allow us
            to improve it. For more information about cookies and why we use
            them, please refer to our Cookie Policy.<br /><br />
          </p>
        </article>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
