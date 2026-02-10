import type { Metadata } from "next";
import PolicyPage from "@/components/company-basic/policy-page";

export const metadata: Metadata = {
  title: "개인정보 처리 방침 - (주)스테이지 STAY-G",
  description: "개인정보 처리 방침",
};

const separator = <hr className="my-8 border-[#dfdfdf]" />;

export default function PersonalInformationPage() {
  return (
    <PolicyPage activeTab="privacy" title="개인정보 처리 방침" subtitle="Privacy Policy">
      <p className="text-sm">
        ‘스테이지’는 (이하 ‘회사’는) 고객 님의 개인정보를 중요시하며, “정보 통신망 이용 촉진 및 정보
        보호”에 관한 법률을 준수하고 있습니다.
        <br />
        회사는 개인정보처리방침을 통하여 고객 님께서 제공하시는 개인정보가 어떠한 용도와 방식으로
        이용되고 있으며, 개인 정보 보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
        <br />
        회사는 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별 공지)을 통하여 공지할
        것입니다.
        <br />본 방침은 : 2020 년 06 월 30일 부터 시행됩니다.
      </p>

      {separator}

      <h3 className="font-semibold text-base">1. 수집하는 개인정보 항목</h3>
      <p className="mt-3 text-sm">
        회사는 상담 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.
      </p>
      <p className="mt-3 text-sm">온라인 문의</p>
      <p className="mt-3 text-sm">수집 항목 : 이름, 연락처, 이메일, 문의 내용 등</p>

      {separator}

      <h3 className="font-semibold text-base">2. 개인정보의 수집 및 이용 목적</h3>
      <p className="mt-3 text-sm">
        회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
        <br />
        서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 문의/답변
      </p>

      {separator}

      <h3 className="font-semibold text-base">3. 개인정보의 보유 및 이용 기간</h3>
      <p className="mt-3 text-sm">
        원칙적으로, 개인정보 수집 및 이용 목적이 달성 된 후에는 해당 정보를 지체 없이 파기합니다.
        단, 관계 법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계 법령에서 정한
        일정한 기간 동안 회원정보를 보관합니다.
      </p>
      <p className="mt-3 text-sm">보존 항목 및 결제 기록 보존 근거</p>
      <ul className="mt-3 list-disc pl-5 text-sm">
        <li>계약 또는 청약 철회 등에 관한 기록 보존 기간 : 3년</li>
        <li>
          계약 또는 청약 철회 등에 관한 기록 : 5년 (전자상거래 등 에서의 소비자보호에 관한 법률)
        </li>
        <li>
          대금 결제 및 재화 등의 공급에 관한 기록 : 5년 (전자상거래 등 에서의 소비자보호에 관한
          법률)
        </li>
        <li>
          소비자의 불만 또는 분쟁 처리에 관한 기록 : 3년 (전자상거래 등 에서의 소비자보호에 관한
          법률)
        </li>
      </ul>

      {separator}

      <h3 className="font-semibold text-base">4. 개인정보의 파기 절차 및 방법</h3>
      <p className="mt-3 text-sm">
        회사는 원칙적으로 개인정보 수집 및 이용 목적이 달성 된 후에는 해당 정보를 지체 없이
        파기합니다. 파기 절차 및 방법은 다음과 같습니다.
      </p>
      <p className="mt-3 text-sm">
        파기 절차 : 회원 님이 회원 가입 등을 위해 입력하신 정보는 목적이 달성 된 후 별도의 DB로
        옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보 보호 사유에
        따라(보유 및 이용 기간 참조) 일정 기간 저장된 후 파기 되어 집니다.
        <br />
        별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유 되어지는 이외의 다른 목적으로
        이용되지 않습니다.
      </p>
      <p className="mt-3 text-sm">
        파기 방법 : 전자 적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을
        사용하여 삭제합니다.
      </p>

      {separator}

      <h3 className="font-semibold text-base">5. 개인정보 제공</h3>
      <p className="mt-3 text-sm">
        회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로
        합니다.
        <br />
        이용자들이 사전에 동의한 경우 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와
        방법에 따라 수사 기관의 요구가 있는 경우
      </p>

      {separator}

      <h3 className="font-semibold text-base">6. 이용자 및 법정 대리인의 권리와 그 행사 방법</h3>
      <p className="mt-3 text-sm">
        회사는 서비스 이행을 위해 아래와 같이 외부 전문 업체에 위탁하여 운영하고 있습니다.
      </p>
      <p className="mt-3 text-sm">위탁 대상자 : 카페(주)</p>
      <p className="mt-3 text-sm">위탁 업무 내용 : 웹사이트 및 시스템(호스팅)</p>

      {separator}

      <h3 className="font-semibold text-base">7. 이용자 및 법정대리인의 권리와 그 행사방법</h3>
      <p className="mt-3 text-sm">
        이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입 해지를
        요청할 수 있습니다.
        <br />
        이용자들의 개인정보 조회, 수정을 위해서는 ‘개인정보 변경'(또는 ‘회원 정보 수정’ 등)을 가입
        해지(동의 철회)를 위해서는 “회원 탈퇴”를 클릭하여 본인 확인 절차를 거치신 후 직접 열람, 정정
        또는 탈퇴가 가능합니다.
        <br />
        혹은 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다.
        <br />
        귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해
        개인정보를 이용 또는 제공하지 않습니다.
        <br />
        또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체없이
        통지하여 정정이 이루어지도록 하겠습니다.
        <br />
        회사는 이용자의 요청에 의해 해지 또는 삭제된 개인정보는 “회사가 수집하는 개인정보의 보유 및
        이용 기간”에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고
        있습니다.
        <br />만 14세 미만 아동의 경우, 법정 대리인이 아동의 개인정보를 조회하거나 수정할 권리, 수집
        및 동의를 철회할 권리를 가집니다.
      </p>

      {separator}

      <h3 className="font-semibold text-base">
        8. 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항
      </h3>
      <p className="mt-3 text-sm">회사는 다음과 같은 목적을 위해 쿠키를 사용합니다.</p>
      <ul className="mt-3 list-disc pl-5 text-sm">
        <li>
          쿠키 등 사용 목적 : 회원과 비회원의 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과
          관심분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 회수 파악 등을 통한 타겟
          마케팅 및 개인 맞춤 서비스 제공
        </li>
        <li>
          쿠키 설정 거부 방법 : 회원님이 사용하시는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를
          허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.
        </li>
        <li>
          설정방법 : 예(인터넷 익스플로어의 경우) : 웹 브라우저 상단의 도구 &gt; 인터넷 옵션 &gt;
          개인정보. 단, 귀하께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수
          있습니다.
        </li>
      </ul>

      {separator}

      <h3 className="font-semibold text-base">9. 개인정보에 관한 민원서비스</h3>
      <p className="mt-3 text-sm">
        회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련
        부서 및 개인정보관리책임자를 지정하고 있습니다.
      </p>

      {separator}

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1px_1fr]">
        <div>
          <p className="text-sm">고객 서비스 담당 부서</p>
          <p className="mt-3 text-[#6f6f6f] text-sm">
            부서명 : 고객관리센터
            <br />
            전화번호 : 0507-1465-7060
            <br />
            이메일 : kevin7060@naver.com
          </p>
        </div>
        <div className="hidden bg-[#dfdfdf] md:block" />
        <div>
          <p className="text-sm">개인정보관리 책임자</p>
          <p className="mt-3 text-[#6f6f6f] text-sm">
            성명 : 이시형
            <br />
            전화번호 : 010-5172-7060
            <br />
            이메일 : kevin7060@naver.com
          </p>
        </div>
      </div>
    </PolicyPage>
  );
}
