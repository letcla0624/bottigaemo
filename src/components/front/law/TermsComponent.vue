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
          Bottigaemo
          邀請所有用戶細閱以下法律聲明。一經存取、瀏覽或使用本網站，即代表用戶確認已閱讀、明白和接受此等法律聲明。
          <br /><br />

          <h2 class="text-2xl lg:text-3xl text-center my-5 lg:my-10">
            A. 有關網站管理員的資料
          </h2>
          <p>
            Bottigaemo
            承諾盡一切努力，確保用戶任何時候都能存取本網站。一旦本網站無法訪問，其不會基於任何因由而負上責任。公司並不確保在本網站散佈的資料準確完整，亦不保證本網站持續妥為運作或其上的資料徹底安全（例如並不對於本網站的資料出錯或不可用而負責）。<br /><br />

            用戶確認擁有必需的技巧及方式以存取和使用本網站。用戶確認已核實電腦配置概無病毒、木馬程式或任何其他惡意或技術有害材料，且能完全正常運作。<br /><br />

            用戶不得企圖未經授權存取本網站、本網站所存的伺服器，或與本網站相連的任何其他伺服器、電腦或數據庫。違反此條文即屬刑事罪行。我們將向具有司法管轄權的司法機關舉報此類違法行為，並將向該等機關披露您的身份以配合調查。<br /><br />
          </p>

          <h2 class="text-2xl lg:text-3xl text-center my-5 lg:my-10">
            B. 保護個人資料及 Cookie
          </h2>
          <p>
            Bottigaemo
            將確保按照本網站「法律聲明及個人資料」、「私隱政策」標籤下的私隱政策，保護個人資料。<br /><br />

            用戶亦須知悉，在瀏覽本網站期間，可能自動在其瀏覽器軟件自動安裝一項或多項
            Cookie。適用於 Cookie
            的規則載於本網站「法律聲明及個人資料」、「Cookie 政策」標籤下的
            Cookie 政策。<br /><br />
          </p>

          <h2 class="text-2xl lg:text-3xl text-center my-5 lg:my-10">
            C. 知識產權
          </h2>
          <p>
            Bottigaemo
            擁有本網站及其上所發佈材料的所有知識產權。當中包括但不限於標誌、標記、數據庫、檔案、影片、文章、程式、內容（包括數據）、文本、靜態或動畫圖片、工業設計、商標、音訊及圖像。<br /><br />

            未經 Bottigaemo
            明確授權，禁止以任何方式全面或部分呈現本網站或當中的任何元素，以免構成比利時知識產權法下的侵犯行為。<br /><br />
          </p>

          <h2 class="text-2xl lg:text-3xl text-center my-5 lg:my-10">
            D. 超文本連結
          </h2>
          <p>
            在任何情況下，本網站上對於其他網站的超文本連結均並非由 Bottigaemo
            負責。<br /><br />

            對於本網站連結至的網站內容，以及瀏覽該等網站期間承受的任何損害，Bottigaemo
            恕不負責。用戶瀏覽其他網站時，須自行承擔責任及風險。<br /><br />
          </p>

          <h2 class="text-2xl lg:text-3xl text-center my-5 lg:my-10">
            E. 適用法律
          </h2>
          <p>
            本網站由比利時法律管限。任何因詮釋或執行本網站所致的任何爭議或訴訟，將受
            Bottigaemo 總部所在地點的法院獨家司法管轄權所規限。<br /><br />
          </p>

          <h2 class="text-2xl lg:text-3xl text-center my-5 lg:my-10">
            F. 法律聲明修訂
          </h2>
          <p>
            Bottigaemo
            保留權利隨時修訂此等法律聲明的內容，而恕不另行通知。因此，用戶應定期查閱聲明。<br /><br />
          </p>
        </article>
      </template>
      <template v-else-if="localLang === 'en'">
        <article class="text-base leading-loose font-light">
          Bottigaemo invites all users to read the following legal notices
          carefully. By accessing, browsing or using the website, users
          acknowledge having read, understood and accepted these legal notices.
          <br /><br />

          <h2 class="text-2xl lg:text-3xl text-center my-5 lg:my-10">
            1. Information regarding the site administrator
          </h2>
          <p>
            Bottigaemo undertakes to make all efforts necessary to ensure that
            users have access to the Site at all times. In the event of
            unavailability of the site, it cannot be held responsible on any
            grounds whatsoever. It cannot guarantee the accuracy and
            completeness of the information disseminated on its Site, nor the
            permanence of its proper functioning, nor total information security
            on it (e.g. it cannot be held responsible for errors or
            unavailability of information on its Site).<br /><br />

            The user acknowledges having the skills and means necessary to
            access and use the Site. They acknowledge having verified that their
            computer configuration contains no virus, Trojan horse, or any other
            malicious or technologically harmful material, and that it is in
            perfect working order.<br /><br />

            The user must not attempt to obtain unauthorized access to our site,
            the server on which our Site is stored, or any other server,
            computer or database connected to our Site. Violation of this
            provision is a criminal offence. We will report any such breach to
            the competent judicial authorities, and will cooperate with those
            authorities by disclosing your identity to them.<br /><br />
          </p>

          <h2 class="text-2xl lg:text-3xl text-center my-5 lg:my-10">
            2. Protection of personal data and cookies
          </h2>
          <p>
            Bottigaemo will ensure the protection of personal data provided in
            accordance with the Privacy Policy available on our Site under the
            tab “Legal Notices and Personal Data”, “Privacy Policy”.<br /><br />

            The user is also informed that, during their visits to the Site, one
            or more cookies may be automatically installed in their browser
            software. The rules applicable to cookies are accessible in the
            Cookie Policy available on our Site under the tab “Legal Notices and
            Personal Data”, “Cookie Policy”.<br /><br />
          </p>

          <h2 class="text-2xl lg:text-3xl text-center my-5 lg:my-10">
            3. Intellectual property
          </h2>
          <p>
            Bottigaemo is the owner of all intellectual property rights to the
            Site and to the material published on it. This means, but is not
            limited to, logos, logotypes, databases, files, videos, articles,
            programs, content including data, texts, still or animated images,
            industrial designs, trademarks, sounds, and graphics.<br /><br />

            Any total or partial representation of the Site or of any of the
            elements which it comprises, by any means whatsoever and without the
            express authorization of Bottigaemo, is prohibited and constitutes
            an infringement of Belgian law governing intellectual property.

            <br /><br />
          </p>

          <h2 class="text-2xl lg:text-3xl text-center my-5 lg:my-10">
            4. Hypertext links
          </h2>
          <p>
            Hypertext links to other sites from our site are not, whatever the
            circumstances, the responsibility of Bottigaemo.<br /><br />

            Bottigaemo takes no responsibility for the content of sites to which
            our Site links, nor for any damage sustained while visiting those
            sites. Users visit other sites under their own responsibility and at
            their own risk.<br /><br />
          </p>

          <h2 class="text-2xl lg:text-3xl text-center my-5 lg:my-10">
            Applicable law
          </h2>
          <p>
            This Site is governed by Belgian law. Any dispute or litigation that
            may arise from the interpretation or execution thereof will be the
            exclusive jurisdiction of those courts to which Bottigaemo’s
            headquarters is subject.<br /><br />
          </p>

          <h2 class="text-2xl lg:text-3xl text-center my-5 lg:my-10">
            6. Modification of the legal notices
          </h2>
          <p>
            Bottigaemo reserves the right to modify the content of these legal
            notices at any time and without notice. The user is therefore
            invited to consult them regularly.<br /><br />
          </p>
        </article>
      </template>
    </div>
  </div>
</template>
