import type { Metadata } from "next";
import PolicyPage from "@/components/company-basic/policy-page";

export const metadata: Metadata = {
  title: "이메일 무단 수집 거부 - (주)스테이지 STAY-G",
  description: "이메일 무단 수집 거부",
};

export default function EmailsPermissionPage() {
  return (
    <PolicyPage
      activeTab="emails"
      title="이메일 무단 수집 거부"
      subtitle="Refuse to Collect Emails without Permission"
      description="본 웹사이트에 게시 된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집 되는 것을 거부하며 이를 위반 시 정보 통신망 법에 의해 형사 처벌 됨을 유념하시기 바랍니다."
    />
  );
}
