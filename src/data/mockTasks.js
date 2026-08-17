// 확정된 데이터 모델: Task ID, 5단계 분류(단계/시스템/업무/항목/작업),
// Critical Path, 선후행 Task ID(후행은 자동 계산), 산출물, 담당자, 계획/실적 일시
// 시나리오: 담당자 20명 x 프로젝트 5일 x 4개 시스템 x 5개 업무영역(체인) = 100개 작업

export const tasks = [
  {
    "id": "MIG-0001",
    "phase": "1단계 - 사전준비",
    "system": "고객계정계",
    "work": "환경구축",
    "item": "고객계정계 환경구축",
    "task": "고객계정계 환경구축 - 착수 및 요건 확인",
    "critical": true,
    "predecessor": null,
    "successor": [
      "MIG-0002"
    ],
    "deliverable": "착수 및 요건 확인 결과서",
    "owner": "김도윤",
    "subOwner": "이서연",
    "ownerEmail": "dykim@company.com",
    "plannedStart": "2026-08-18T09:00",
    "plannedEnd": "2026-08-18T18:00",
    "actualStart": "2026-08-18T09:00",
    "actualEnd": "2026-08-18T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0002",
    "phase": "1단계 - 사전준비",
    "system": "고객계정계",
    "work": "환경구축",
    "item": "고객계정계 환경구축",
    "task": "고객계정계 환경구축 - 설계 및 개발",
    "critical": true,
    "predecessor": [
      "MIG-0001"
    ],
    "successor": [
      "MIG-0003"
    ],
    "deliverable": "설계 및 개발 결과서",
    "owner": "김도윤",
    "subOwner": "이서연",
    "ownerEmail": "dykim@company.com",
    "plannedStart": "2026-08-19T09:00",
    "plannedEnd": "2026-08-19T18:00",
    "actualStart": "2026-08-19T09:00",
    "actualEnd": "2026-08-19T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0003",
    "phase": "1단계 - 사전준비",
    "system": "고객계정계",
    "work": "환경구축",
    "item": "고객계정계 환경구축",
    "task": "고객계정계 환경구축 - 1차 검증",
    "critical": true,
    "predecessor": [
      "MIG-0002"
    ],
    "successor": [
      "MIG-0004"
    ],
    "deliverable": "1차 검증 결과서",
    "owner": "이서연",
    "subOwner": "박민재",
    "ownerEmail": "sylee@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0004",
    "phase": "1단계 - 사전준비",
    "system": "고객계정계",
    "work": "환경구축",
    "item": "고객계정계 환경구축",
    "task": "고객계정계 환경구축 - 보완 조치",
    "critical": true,
    "predecessor": [
      "MIG-0003"
    ],
    "successor": [
      "MIG-0005"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "이서연",
    "subOwner": "박민재",
    "ownerEmail": "sylee@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0005",
    "phase": "1단계 - 사전준비",
    "system": "고객계정계",
    "work": "환경구축",
    "item": "고객계정계 환경구축",
    "task": "고객계정계 환경구축 - 완료 보고",
    "critical": true,
    "predecessor": [
      "MIG-0004"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "박민재",
    "subOwner": "최지훈",
    "ownerEmail": "mjpark@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0006",
    "phase": "2단계 - 데이터이관",
    "system": "고객계정계",
    "work": "데이터이관",
    "item": "고객계정계 데이터이관",
    "task": "고객계정계 데이터이관 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0007"
    ],
    "deliverable": "착수 및 요건 확인 결과서",
    "owner": "이서연",
    "subOwner": "박민재",
    "ownerEmail": "sylee@company.com",
    "plannedStart": "2026-08-18T09:00",
    "plannedEnd": "2026-08-18T18:00",
    "actualStart": "2026-08-18T09:00",
    "actualEnd": "2026-08-18T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0007",
    "phase": "2단계 - 데이터이관",
    "system": "고객계정계",
    "work": "데이터이관",
    "item": "고객계정계 데이터이관",
    "task": "고객계정계 데이터이관 - 설계 및 개발",
    "critical": false,
    "predecessor": [
      "MIG-0006"
    ],
    "successor": [
      "MIG-0008"
    ],
    "deliverable": "설계 및 개발 결과서",
    "owner": "이서연",
    "subOwner": "박민재",
    "ownerEmail": "sylee@company.com",
    "plannedStart": "2026-08-19T09:00",
    "plannedEnd": "2026-08-19T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0008",
    "phase": "2단계 - 데이터이관",
    "system": "고객계정계",
    "work": "데이터이관",
    "item": "고객계정계 데이터이관",
    "task": "고객계정계 데이터이관 - 1차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0007"
    ],
    "successor": [
      "MIG-0009"
    ],
    "deliverable": "1차 검증 결과서",
    "owner": "박민재",
    "subOwner": "최지훈",
    "ownerEmail": "mjpark@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0009",
    "phase": "2단계 - 데이터이관",
    "system": "고객계정계",
    "work": "데이터이관",
    "item": "고객계정계 데이터이관",
    "task": "고객계정계 데이터이관 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0008"
    ],
    "successor": [
      "MIG-0010"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "박민재",
    "subOwner": "최지훈",
    "ownerEmail": "mjpark@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0010",
    "phase": "2단계 - 데이터이관",
    "system": "고객계정계",
    "work": "데이터이관",
    "item": "고객계정계 데이터이관",
    "task": "고객계정계 데이터이관 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0009"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "최지훈",
    "subOwner": "정하은",
    "ownerEmail": "jhchoi@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0011",
    "phase": "3단계 - 정합성검증",
    "system": "고객계정계",
    "work": "정합성검증",
    "item": "고객계정계 정합성검증",
    "task": "고객계정계 정합성검증 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0012"
    ],
    "deliverable": "착수 및 요건 확인 결과서",
    "owner": "박민재",
    "subOwner": "최지훈",
    "ownerEmail": "mjpark@company.com",
    "plannedStart": "2026-08-18T09:00",
    "plannedEnd": "2026-08-18T18:00",
    "actualStart": "2026-08-18T09:00",
    "actualEnd": "2026-08-18T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0012",
    "phase": "3단계 - 정합성검증",
    "system": "고객계정계",
    "work": "정합성검증",
    "item": "고객계정계 정합성검증",
    "task": "고객계정계 정합성검증 - 설계 및 개발",
    "critical": false,
    "predecessor": [
      "MIG-0011"
    ],
    "successor": [
      "MIG-0013"
    ],
    "deliverable": "설계 및 개발 결과서",
    "owner": "박민재",
    "subOwner": "최지훈",
    "ownerEmail": "mjpark@company.com",
    "plannedStart": "2026-08-19T09:00",
    "plannedEnd": "2026-08-19T18:00",
    "actualStart": "2026-08-19T09:00",
    "actualEnd": "2026-08-19T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0013",
    "phase": "3단계 - 정합성검증",
    "system": "고객계정계",
    "work": "정합성검증",
    "item": "고객계정계 정합성검증",
    "task": "고객계정계 정합성검증 - 1차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0012"
    ],
    "successor": [
      "MIG-0014"
    ],
    "deliverable": "1차 검증 결과서",
    "owner": "최지훈",
    "subOwner": "정하은",
    "ownerEmail": "jhchoi@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0014",
    "phase": "3단계 - 정합성검증",
    "system": "고객계정계",
    "work": "정합성검증",
    "item": "고객계정계 정합성검증",
    "task": "고객계정계 정합성검증 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0013"
    ],
    "successor": [
      "MIG-0015"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "최지훈",
    "subOwner": "정하은",
    "ownerEmail": "jhchoi@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0015",
    "phase": "3단계 - 정합성검증",
    "system": "고객계정계",
    "work": "정합성검증",
    "item": "고객계정계 정합성검증",
    "task": "고객계정계 정합성검증 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0014"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "정하은",
    "subOwner": "강서준",
    "ownerEmail": "hejung@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0016",
    "phase": "4단계 - 통합테스트",
    "system": "고객계정계",
    "work": "통합테스트",
    "item": "고객계정계 통합테스트",
    "task": "고객계정계 통합테스트 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0017"
    ],
    "deliverable": "착수 및 요건 확인 결과서",
    "owner": "최지훈",
    "subOwner": "정하은",
    "ownerEmail": "jhchoi@company.com",
    "plannedStart": "2026-08-18T09:00",
    "plannedEnd": "2026-08-18T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0017",
    "phase": "4단계 - 통합테스트",
    "system": "고객계정계",
    "work": "통합테스트",
    "item": "고객계정계 통합테스트",
    "task": "고객계정계 통합테스트 - 설계 및 개발",
    "critical": false,
    "predecessor": [
      "MIG-0016"
    ],
    "successor": [
      "MIG-0018"
    ],
    "deliverable": "설계 및 개발 결과서",
    "owner": "최지훈",
    "subOwner": "정하은",
    "ownerEmail": "jhchoi@company.com",
    "plannedStart": "2026-08-19T09:00",
    "plannedEnd": "2026-08-19T18:00",
    "actualStart": "2026-08-19T09:00",
    "actualEnd": "2026-08-19T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0018",
    "phase": "4단계 - 통합테스트",
    "system": "고객계정계",
    "work": "통합테스트",
    "item": "고객계정계 통합테스트",
    "task": "고객계정계 통합테스트 - 1차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0017"
    ],
    "successor": [
      "MIG-0019"
    ],
    "deliverable": "1차 검증 결과서",
    "owner": "정하은",
    "subOwner": "강서준",
    "ownerEmail": "hejung@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0019",
    "phase": "4단계 - 통합테스트",
    "system": "고객계정계",
    "work": "통합테스트",
    "item": "고객계정계 통합테스트",
    "task": "고객계정계 통합테스트 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0018"
    ],
    "successor": [
      "MIG-0020"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "정하은",
    "subOwner": "강서준",
    "ownerEmail": "hejung@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0020",
    "phase": "4단계 - 통합테스트",
    "system": "고객계정계",
    "work": "통합테스트",
    "item": "고객계정계 통합테스트",
    "task": "고객계정계 통합테스트 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0019"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "강서준",
    "subOwner": "윤지우",
    "ownerEmail": "sjkang@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": "2026-08-22T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0021",
    "phase": "5단계 - 전환리허설",
    "system": "고객계정계",
    "work": "전환리허설",
    "item": "고객계정계 전환리허설",
    "task": "고객계정계 전환리허설 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0022"
    ],
    "deliverable": "착수 및 요건 확인 결과서",
    "owner": "정하은",
    "subOwner": "강서준",
    "ownerEmail": "hejung@company.com",
    "plannedStart": "2026-08-18T09:00",
    "plannedEnd": "2026-08-18T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0022",
    "phase": "5단계 - 전환리허설",
    "system": "고객계정계",
    "work": "전환리허설",
    "item": "고객계정계 전환리허설",
    "task": "고객계정계 전환리허설 - 설계 및 개발",
    "critical": false,
    "predecessor": [
      "MIG-0021"
    ],
    "successor": [
      "MIG-0023"
    ],
    "deliverable": "설계 및 개발 결과서",
    "owner": "정하은",
    "subOwner": "강서준",
    "ownerEmail": "hejung@company.com",
    "plannedStart": "2026-08-19T09:00",
    "plannedEnd": "2026-08-19T18:00",
    "actualStart": "2026-08-19T09:00",
    "actualEnd": "2026-08-19T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0023",
    "phase": "5단계 - 전환리허설",
    "system": "고객계정계",
    "work": "전환리허설",
    "item": "고객계정계 전환리허설",
    "task": "고객계정계 전환리허설 - 1차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0022"
    ],
    "successor": [
      "MIG-0024"
    ],
    "deliverable": "1차 검증 결과서",
    "owner": "강서준",
    "subOwner": "윤지우",
    "ownerEmail": "sjkang@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": "2026-08-20T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0024",
    "phase": "5단계 - 전환리허설",
    "system": "고객계정계",
    "work": "전환리허설",
    "item": "고객계정계 전환리허설",
    "task": "고객계정계 전환리허설 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0023"
    ],
    "successor": [
      "MIG-0025"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "강서준",
    "subOwner": "윤지우",
    "ownerEmail": "sjkang@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": "2026-08-21T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0025",
    "phase": "5단계 - 전환리허설",
    "system": "고객계정계",
    "work": "전환리허설",
    "item": "고객계정계 전환리허설",
    "task": "고객계정계 전환리허설 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0024"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "윤지우",
    "subOwner": "임하윤",
    "ownerEmail": "jwyoon@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0026",
    "phase": "1단계 - 사전준비",
    "system": "여신계",
    "work": "환경구축",
    "item": "여신계 환경구축",
    "task": "여신계 환경구축 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0027"
    ],
    "deliverable": "착수 및 요건 확인 결과서",
    "owner": "강서준",
    "subOwner": "윤지우",
    "ownerEmail": "sjkang@company.com",
    "plannedStart": "2026-08-18T09:00",
    "plannedEnd": "2026-08-18T18:00",
    "actualStart": "2026-08-18T09:00",
    "actualEnd": "2026-08-18T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0027",
    "phase": "1단계 - 사전준비",
    "system": "여신계",
    "work": "환경구축",
    "item": "여신계 환경구축",
    "task": "여신계 환경구축 - 설계 및 개발",
    "critical": false,
    "predecessor": [
      "MIG-0026"
    ],
    "successor": [
      "MIG-0028"
    ],
    "deliverable": "설계 및 개발 결과서",
    "owner": "강서준",
    "subOwner": "윤지우",
    "ownerEmail": "sjkang@company.com",
    "plannedStart": "2026-08-19T09:00",
    "plannedEnd": "2026-08-19T18:00",
    "actualStart": "2026-08-19T09:00",
    "actualEnd": "2026-08-19T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0028",
    "phase": "1단계 - 사전준비",
    "system": "여신계",
    "work": "환경구축",
    "item": "여신계 환경구축",
    "task": "여신계 환경구축 - 1차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0027"
    ],
    "successor": [
      "MIG-0029"
    ],
    "deliverable": "1차 검증 결과서",
    "owner": "윤지우",
    "subOwner": "임하윤",
    "ownerEmail": "jwyoon@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0029",
    "phase": "1단계 - 사전준비",
    "system": "여신계",
    "work": "환경구축",
    "item": "여신계 환경구축",
    "task": "여신계 환경구축 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0028"
    ],
    "successor": [
      "MIG-0030"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "윤지우",
    "subOwner": "임하윤",
    "ownerEmail": "jwyoon@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0030",
    "phase": "1단계 - 사전준비",
    "system": "여신계",
    "work": "환경구축",
    "item": "여신계 환경구축",
    "task": "여신계 환경구축 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0029"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "임하윤",
    "subOwner": "한소율",
    "ownerEmail": "hylim@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0031",
    "phase": "2단계 - 데이터이관",
    "system": "여신계",
    "work": "데이터이관",
    "item": "여신계 데이터이관",
    "task": "여신계 데이터이관 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0032"
    ],
    "deliverable": "착수 및 요건 확인 결과서",
    "owner": "윤지우",
    "subOwner": "임하윤",
    "ownerEmail": "jwyoon@company.com",
    "plannedStart": "2026-08-18T09:00",
    "plannedEnd": "2026-08-18T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0032",
    "phase": "2단계 - 데이터이관",
    "system": "여신계",
    "work": "데이터이관",
    "item": "여신계 데이터이관",
    "task": "여신계 데이터이관 - 설계 및 개발",
    "critical": false,
    "predecessor": [
      "MIG-0031"
    ],
    "successor": [
      "MIG-0033"
    ],
    "deliverable": "설계 및 개발 결과서",
    "owner": "윤지우",
    "subOwner": "임하윤",
    "ownerEmail": "jwyoon@company.com",
    "plannedStart": "2026-08-19T09:00",
    "plannedEnd": "2026-08-19T18:00",
    "actualStart": "2026-08-19T09:00",
    "actualEnd": "2026-08-19T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0033",
    "phase": "2단계 - 데이터이관",
    "system": "여신계",
    "work": "데이터이관",
    "item": "여신계 데이터이관",
    "task": "여신계 데이터이관 - 1차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0032"
    ],
    "successor": [
      "MIG-0034"
    ],
    "deliverable": "1차 검증 결과서",
    "owner": "임하윤",
    "subOwner": "한소율",
    "ownerEmail": "hylim@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0034",
    "phase": "2단계 - 데이터이관",
    "system": "여신계",
    "work": "데이터이관",
    "item": "여신계 데이터이관",
    "task": "여신계 데이터이관 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0033"
    ],
    "successor": [
      "MIG-0035"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "임하윤",
    "subOwner": "한소율",
    "ownerEmail": "hylim@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": "2026-08-21T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0035",
    "phase": "2단계 - 데이터이관",
    "system": "여신계",
    "work": "데이터이관",
    "item": "여신계 데이터이관",
    "task": "여신계 데이터이관 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0034"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "한소율",
    "subOwner": "오예준",
    "ownerEmail": "syhan@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0036",
    "phase": "3단계 - 정합성검증",
    "system": "여신계",
    "work": "정합성검증",
    "item": "여신계 정합성검증",
    "task": "여신계 정합성검증 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0037"
    ],
    "deliverable": "착수 및 요건 확인 결과서",
    "owner": "임하윤",
    "subOwner": "한소율",
    "ownerEmail": "hylim@company.com",
    "plannedStart": "2026-08-18T09:00",
    "plannedEnd": "2026-08-18T18:00",
    "actualStart": "2026-08-18T09:00",
    "actualEnd": "2026-08-18T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0037",
    "phase": "3단계 - 정합성검증",
    "system": "여신계",
    "work": "정합성검증",
    "item": "여신계 정합성검증",
    "task": "여신계 정합성검증 - 설계 및 개발",
    "critical": false,
    "predecessor": [
      "MIG-0036"
    ],
    "successor": [
      "MIG-0038"
    ],
    "deliverable": "설계 및 개발 결과서",
    "owner": "임하윤",
    "subOwner": "한소율",
    "ownerEmail": "hylim@company.com",
    "plannedStart": "2026-08-19T09:00",
    "plannedEnd": "2026-08-19T18:00",
    "actualStart": "2026-08-19T09:00",
    "actualEnd": "2026-08-19T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0038",
    "phase": "3단계 - 정합성검증",
    "system": "여신계",
    "work": "정합성검증",
    "item": "여신계 정합성검증",
    "task": "여신계 정합성검증 - 1차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0037"
    ],
    "successor": [
      "MIG-0039"
    ],
    "deliverable": "1차 검증 결과서",
    "owner": "한소율",
    "subOwner": "오예준",
    "ownerEmail": "syhan@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0039",
    "phase": "3단계 - 정합성검증",
    "system": "여신계",
    "work": "정합성검증",
    "item": "여신계 정합성검증",
    "task": "여신계 정합성검증 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0038"
    ],
    "successor": [
      "MIG-0040"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "한소율",
    "subOwner": "오예준",
    "ownerEmail": "syhan@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0040",
    "phase": "3단계 - 정합성검증",
    "system": "여신계",
    "work": "정합성검증",
    "item": "여신계 정합성검증",
    "task": "여신계 정합성검증 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0039"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "오예준",
    "subOwner": "서지민",
    "ownerEmail": "yjoh@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0041",
    "phase": "4단계 - 통합테스트",
    "system": "여신계",
    "work": "통합테스트",
    "item": "여신계 통합테스트",
    "task": "여신계 통합테스트 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0042"
    ],
    "deliverable": "착수 및 요건 확인 결과서",
    "owner": "한소율",
    "subOwner": "오예준",
    "ownerEmail": "syhan@company.com",
    "plannedStart": "2026-08-18T09:00",
    "plannedEnd": "2026-08-18T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0042",
    "phase": "4단계 - 통합테스트",
    "system": "여신계",
    "work": "통합테스트",
    "item": "여신계 통합테스트",
    "task": "여신계 통합테스트 - 설계 및 개발",
    "critical": false,
    "predecessor": [
      "MIG-0041"
    ],
    "successor": [
      "MIG-0043"
    ],
    "deliverable": "설계 및 개발 결과서",
    "owner": "한소율",
    "subOwner": "오예준",
    "ownerEmail": "syhan@company.com",
    "plannedStart": "2026-08-19T09:00",
    "plannedEnd": "2026-08-19T18:00",
    "actualStart": "2026-08-19T09:00",
    "actualEnd": "2026-08-19T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0043",
    "phase": "4단계 - 통합테스트",
    "system": "여신계",
    "work": "통합테스트",
    "item": "여신계 통합테스트",
    "task": "여신계 통합테스트 - 1차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0042"
    ],
    "successor": [
      "MIG-0044"
    ],
    "deliverable": "1차 검증 결과서",
    "owner": "오예준",
    "subOwner": "서지민",
    "ownerEmail": "yjoh@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0044",
    "phase": "4단계 - 통합테스트",
    "system": "여신계",
    "work": "통합테스트",
    "item": "여신계 통합테스트",
    "task": "여신계 통합테스트 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0043"
    ],
    "successor": [
      "MIG-0045"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "오예준",
    "subOwner": "서지민",
    "ownerEmail": "yjoh@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0045",
    "phase": "4단계 - 통합테스트",
    "system": "여신계",
    "work": "통합테스트",
    "item": "여신계 통합테스트",
    "task": "여신계 통합테스트 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0044"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "서지민",
    "subOwner": "신다인",
    "ownerEmail": "jmseo@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0046",
    "phase": "5단계 - 전환리허설",
    "system": "여신계",
    "work": "전환리허설",
    "item": "여신계 전환리허설",
    "task": "여신계 전환리허설 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0047"
    ],
    "deliverable": "착수 및 요건 확인 결과서",
    "owner": "오예준",
    "subOwner": "서지민",
    "ownerEmail": "yjoh@company.com",
    "plannedStart": "2026-08-18T09:00",
    "plannedEnd": "2026-08-18T18:00",
    "actualStart": "2026-08-18T09:00",
    "actualEnd": "2026-08-18T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0047",
    "phase": "5단계 - 전환리허설",
    "system": "여신계",
    "work": "전환리허설",
    "item": "여신계 전환리허설",
    "task": "여신계 전환리허설 - 설계 및 개발",
    "critical": false,
    "predecessor": [
      "MIG-0046"
    ],
    "successor": [
      "MIG-0048"
    ],
    "deliverable": "설계 및 개발 결과서",
    "owner": "오예준",
    "subOwner": "서지민",
    "ownerEmail": "yjoh@company.com",
    "plannedStart": "2026-08-19T09:00",
    "plannedEnd": "2026-08-19T18:00",
    "actualStart": "2026-08-19T09:00",
    "actualEnd": "2026-08-19T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0048",
    "phase": "5단계 - 전환리허설",
    "system": "여신계",
    "work": "전환리허설",
    "item": "여신계 전환리허설",
    "task": "여신계 전환리허설 - 1차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0047"
    ],
    "successor": [
      "MIG-0049"
    ],
    "deliverable": "1차 검증 결과서",
    "owner": "서지민",
    "subOwner": "신다인",
    "ownerEmail": "jmseo@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0049",
    "phase": "5단계 - 전환리허설",
    "system": "여신계",
    "work": "전환리허설",
    "item": "여신계 전환리허설",
    "task": "여신계 전환리허설 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0048"
    ],
    "successor": [
      "MIG-0050"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "서지민",
    "subOwner": "신다인",
    "ownerEmail": "jmseo@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0050",
    "phase": "5단계 - 전환리허설",
    "system": "여신계",
    "work": "전환리허설",
    "item": "여신계 전환리허설",
    "task": "여신계 전환리허설 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0049"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "신다인",
    "subOwner": "조은우",
    "ownerEmail": "dishin@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0051",
    "phase": "1단계 - 사전준비",
    "system": "수신계",
    "work": "환경구축",
    "item": "수신계 환경구축",
    "task": "수신계 환경구축 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0052"
    ],
    "deliverable": "착수 및 요건 확인 결과서",
    "owner": "서지민",
    "subOwner": "신다인",
    "ownerEmail": "jmseo@company.com",
    "plannedStart": "2026-08-18T09:00",
    "plannedEnd": "2026-08-18T18:00",
    "actualStart": "2026-08-18T09:00",
    "actualEnd": "2026-08-18T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0052",
    "phase": "1단계 - 사전준비",
    "system": "수신계",
    "work": "환경구축",
    "item": "수신계 환경구축",
    "task": "수신계 환경구축 - 설계 및 개발",
    "critical": false,
    "predecessor": [
      "MIG-0051"
    ],
    "successor": [
      "MIG-0053"
    ],
    "deliverable": "설계 및 개발 결과서",
    "owner": "서지민",
    "subOwner": "신다인",
    "ownerEmail": "jmseo@company.com",
    "plannedStart": "2026-08-19T09:00",
    "plannedEnd": "2026-08-19T18:00",
    "actualStart": "2026-08-19T09:00",
    "actualEnd": "2026-08-19T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0053",
    "phase": "1단계 - 사전준비",
    "system": "수신계",
    "work": "환경구축",
    "item": "수신계 환경구축",
    "task": "수신계 환경구축 - 1차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0052"
    ],
    "successor": [
      "MIG-0054"
    ],
    "deliverable": "1차 검증 결과서",
    "owner": "신다인",
    "subOwner": "조은우",
    "ownerEmail": "dishin@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0054",
    "phase": "1단계 - 사전준비",
    "system": "수신계",
    "work": "환경구축",
    "item": "수신계 환경구축",
    "task": "수신계 환경구축 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0053"
    ],
    "successor": [
      "MIG-0055"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "신다인",
    "subOwner": "조은우",
    "ownerEmail": "dishin@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0055",
    "phase": "1단계 - 사전준비",
    "system": "수신계",
    "work": "환경구축",
    "item": "수신계 환경구축",
    "task": "수신계 환경구축 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0054"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "조은우",
    "subOwner": "배수아",
    "ownerEmail": "ewcho@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0056",
    "phase": "2단계 - 데이터이관",
    "system": "수신계",
    "work": "데이터이관",
    "item": "수신계 데이터이관",
    "task": "수신계 데이터이관 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0057"
    ],
    "deliverable": "착수 및 요건 확인 결과서",
    "owner": "신다인",
    "subOwner": "조은우",
    "ownerEmail": "dishin@company.com",
    "plannedStart": "2026-08-18T09:00",
    "plannedEnd": "2026-08-18T18:00",
    "actualStart": "2026-08-18T09:00",
    "actualEnd": "2026-08-18T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0057",
    "phase": "2단계 - 데이터이관",
    "system": "수신계",
    "work": "데이터이관",
    "item": "수신계 데이터이관",
    "task": "수신계 데이터이관 - 설계 및 개발",
    "critical": false,
    "predecessor": [
      "MIG-0056"
    ],
    "successor": [
      "MIG-0058"
    ],
    "deliverable": "설계 및 개발 결과서",
    "owner": "신다인",
    "subOwner": "조은우",
    "ownerEmail": "dishin@company.com",
    "plannedStart": "2026-08-19T09:00",
    "plannedEnd": "2026-08-19T18:00",
    "actualStart": "2026-08-19T09:00",
    "actualEnd": "2026-08-19T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0058",
    "phase": "2단계 - 데이터이관",
    "system": "수신계",
    "work": "데이터이관",
    "item": "수신계 데이터이관",
    "task": "수신계 데이터이관 - 1차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0057"
    ],
    "successor": [
      "MIG-0059"
    ],
    "deliverable": "1차 검증 결과서",
    "owner": "조은우",
    "subOwner": "배수아",
    "ownerEmail": "ewcho@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": "2026-08-20T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0059",
    "phase": "2단계 - 데이터이관",
    "system": "수신계",
    "work": "데이터이관",
    "item": "수신계 데이터이관",
    "task": "수신계 데이터이관 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0058"
    ],
    "successor": [
      "MIG-0060"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "조은우",
    "subOwner": "배수아",
    "ownerEmail": "ewcho@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0060",
    "phase": "2단계 - 데이터이관",
    "system": "수신계",
    "work": "데이터이관",
    "item": "수신계 데이터이관",
    "task": "수신계 데이터이관 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0059"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "배수아",
    "subOwner": "남도현",
    "ownerEmail": "sabae@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0061",
    "phase": "3단계 - 정합성검증",
    "system": "수신계",
    "work": "정합성검증",
    "item": "수신계 정합성검증",
    "task": "수신계 정합성검증 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0062"
    ],
    "deliverable": "착수 및 요건 확인 결과서",
    "owner": "조은우",
    "subOwner": "배수아",
    "ownerEmail": "ewcho@company.com",
    "plannedStart": "2026-08-18T09:00",
    "plannedEnd": "2026-08-18T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0062",
    "phase": "3단계 - 정합성검증",
    "system": "수신계",
    "work": "정합성검증",
    "item": "수신계 정합성검증",
    "task": "수신계 정합성검증 - 설계 및 개발",
    "critical": false,
    "predecessor": [
      "MIG-0061"
    ],
    "successor": [
      "MIG-0063"
    ],
    "deliverable": "설계 및 개발 결과서",
    "owner": "조은우",
    "subOwner": "배수아",
    "ownerEmail": "ewcho@company.com",
    "plannedStart": "2026-08-19T09:00",
    "plannedEnd": "2026-08-19T18:00",
    "actualStart": "2026-08-19T09:00",
    "actualEnd": "2026-08-19T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0063",
    "phase": "3단계 - 정합성검증",
    "system": "수신계",
    "work": "정합성검증",
    "item": "수신계 정합성검증",
    "task": "수신계 정합성검증 - 1차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0062"
    ],
    "successor": [
      "MIG-0064"
    ],
    "deliverable": "1차 검증 결과서",
    "owner": "배수아",
    "subOwner": "남도현",
    "ownerEmail": "sabae@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": "2026-08-20T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0064",
    "phase": "3단계 - 정합성검증",
    "system": "수신계",
    "work": "정합성검증",
    "item": "수신계 정합성검증",
    "task": "수신계 정합성검증 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0063"
    ],
    "successor": [
      "MIG-0065"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "배수아",
    "subOwner": "남도현",
    "ownerEmail": "sabae@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0065",
    "phase": "3단계 - 정합성검증",
    "system": "수신계",
    "work": "정합성검증",
    "item": "수신계 정합성검증",
    "task": "수신계 정합성검증 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0064"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "남도현",
    "subOwner": "홍유진",
    "ownerEmail": "dhnam@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": "2026-08-22T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0066",
    "phase": "4단계 - 통합테스트",
    "system": "수신계",
    "work": "통합테스트",
    "item": "수신계 통합테스트",
    "task": "수신계 통합테스트 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0067"
    ],
    "deliverable": "착수 및 요건 확인 결과서",
    "owner": "배수아",
    "subOwner": "남도현",
    "ownerEmail": "sabae@company.com",
    "plannedStart": "2026-08-18T09:00",
    "plannedEnd": "2026-08-18T18:00",
    "actualStart": "2026-08-18T09:00",
    "actualEnd": "2026-08-18T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0067",
    "phase": "4단계 - 통합테스트",
    "system": "수신계",
    "work": "통합테스트",
    "item": "수신계 통합테스트",
    "task": "수신계 통합테스트 - 설계 및 개발",
    "critical": false,
    "predecessor": [
      "MIG-0066"
    ],
    "successor": [
      "MIG-0068"
    ],
    "deliverable": "설계 및 개발 결과서",
    "owner": "배수아",
    "subOwner": "남도현",
    "ownerEmail": "sabae@company.com",
    "plannedStart": "2026-08-19T09:00",
    "plannedEnd": "2026-08-19T18:00",
    "actualStart": "2026-08-19T09:00",
    "actualEnd": "2026-08-19T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0068",
    "phase": "4단계 - 통합테스트",
    "system": "수신계",
    "work": "통합테스트",
    "item": "수신계 통합테스트",
    "task": "수신계 통합테스트 - 1차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0067"
    ],
    "successor": [
      "MIG-0069"
    ],
    "deliverable": "1차 검증 결과서",
    "owner": "남도현",
    "subOwner": "홍유진",
    "ownerEmail": "dhnam@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": "2026-08-20T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0069",
    "phase": "4단계 - 통합테스트",
    "system": "수신계",
    "work": "통합테스트",
    "item": "수신계 통합테스트",
    "task": "수신계 통합테스트 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0068"
    ],
    "successor": [
      "MIG-0070"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "남도현",
    "subOwner": "홍유진",
    "ownerEmail": "dhnam@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0070",
    "phase": "4단계 - 통합테스트",
    "system": "수신계",
    "work": "통합테스트",
    "item": "수신계 통합테스트",
    "task": "수신계 통합테스트 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0069"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "홍유진",
    "subOwner": "권태윤",
    "ownerEmail": "yjhong@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0071",
    "phase": "5단계 - 전환리허설",
    "system": "수신계",
    "work": "전환리허설",
    "item": "수신계 전환리허설",
    "task": "수신계 전환리허설 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0072"
    ],
    "deliverable": "착수 및 요건 확인 결과서",
    "owner": "남도현",
    "subOwner": "홍유진",
    "ownerEmail": "dhnam@company.com",
    "plannedStart": "2026-08-18T09:00",
    "plannedEnd": "2026-08-18T18:00",
    "actualStart": "2026-08-18T09:00",
    "actualEnd": "2026-08-18T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0072",
    "phase": "5단계 - 전환리허설",
    "system": "수신계",
    "work": "전환리허설",
    "item": "수신계 전환리허설",
    "task": "수신계 전환리허설 - 설계 및 개발",
    "critical": false,
    "predecessor": [
      "MIG-0071"
    ],
    "successor": [
      "MIG-0073"
    ],
    "deliverable": "설계 및 개발 결과서",
    "owner": "남도현",
    "subOwner": "홍유진",
    "ownerEmail": "dhnam@company.com",
    "plannedStart": "2026-08-19T09:00",
    "plannedEnd": "2026-08-19T18:00",
    "actualStart": "2026-08-19T09:00",
    "actualEnd": "2026-08-19T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0073",
    "phase": "5단계 - 전환리허설",
    "system": "수신계",
    "work": "전환리허설",
    "item": "수신계 전환리허설",
    "task": "수신계 전환리허설 - 1차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0072"
    ],
    "successor": [
      "MIG-0074"
    ],
    "deliverable": "1차 검증 결과서",
    "owner": "홍유진",
    "subOwner": "권태윤",
    "ownerEmail": "yjhong@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0074",
    "phase": "5단계 - 전환리허설",
    "system": "수신계",
    "work": "전환리허설",
    "item": "수신계 전환리허설",
    "task": "수신계 전환리허설 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0073"
    ],
    "successor": [
      "MIG-0075"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "홍유진",
    "subOwner": "권태윤",
    "ownerEmail": "yjhong@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0075",
    "phase": "5단계 - 전환리허설",
    "system": "수신계",
    "work": "전환리허설",
    "item": "수신계 전환리허설",
    "task": "수신계 전환리허설 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0074"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "권태윤",
    "subOwner": "노하람",
    "ownerEmail": "tykwon@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": "2026-08-22T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0076",
    "phase": "1단계 - 사전준비",
    "system": "카드계",
    "work": "환경구축",
    "item": "카드계 환경구축",
    "task": "카드계 환경구축 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0077"
    ],
    "deliverable": "착수 및 요건 확인 결과서",
    "owner": "홍유진",
    "subOwner": "권태윤",
    "ownerEmail": "yjhong@company.com",
    "plannedStart": "2026-08-18T09:00",
    "plannedEnd": "2026-08-18T18:00",
    "actualStart": "2026-08-18T09:00",
    "actualEnd": "2026-08-18T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0077",
    "phase": "1단계 - 사전준비",
    "system": "카드계",
    "work": "환경구축",
    "item": "카드계 환경구축",
    "task": "카드계 환경구축 - 설계 및 개발",
    "critical": false,
    "predecessor": [
      "MIG-0076"
    ],
    "successor": [
      "MIG-0078"
    ],
    "deliverable": "설계 및 개발 결과서",
    "owner": "홍유진",
    "subOwner": "권태윤",
    "ownerEmail": "yjhong@company.com",
    "plannedStart": "2026-08-19T09:00",
    "plannedEnd": "2026-08-19T18:00",
    "actualStart": "2026-08-19T09:00",
    "actualEnd": "2026-08-19T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0078",
    "phase": "1단계 - 사전준비",
    "system": "카드계",
    "work": "환경구축",
    "item": "카드계 환경구축",
    "task": "카드계 환경구축 - 1차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0077"
    ],
    "successor": [
      "MIG-0079"
    ],
    "deliverable": "1차 검증 결과서",
    "owner": "권태윤",
    "subOwner": "노하람",
    "ownerEmail": "tykwon@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0079",
    "phase": "1단계 - 사전준비",
    "system": "카드계",
    "work": "환경구축",
    "item": "카드계 환경구축",
    "task": "카드계 환경구축 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0078"
    ],
    "successor": [
      "MIG-0080"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "권태윤",
    "subOwner": "노하람",
    "ownerEmail": "tykwon@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0080",
    "phase": "1단계 - 사전준비",
    "system": "카드계",
    "work": "환경구축",
    "item": "카드계 환경구축",
    "task": "카드계 환경구축 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0079"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "노하람",
    "subOwner": "백승우",
    "ownerEmail": "hrno@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0081",
    "phase": "2단계 - 데이터이관",
    "system": "카드계",
    "work": "데이터이관",
    "item": "카드계 데이터이관",
    "task": "카드계 데이터이관 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0082"
    ],
    "deliverable": "착수 및 요건 확인 결과서",
    "owner": "권태윤",
    "subOwner": "노하람",
    "ownerEmail": "tykwon@company.com",
    "plannedStart": "2026-08-18T09:00",
    "plannedEnd": "2026-08-18T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0082",
    "phase": "2단계 - 데이터이관",
    "system": "카드계",
    "work": "데이터이관",
    "item": "카드계 데이터이관",
    "task": "카드계 데이터이관 - 설계 및 개발",
    "critical": false,
    "predecessor": [
      "MIG-0081"
    ],
    "successor": [
      "MIG-0083"
    ],
    "deliverable": "설계 및 개발 결과서",
    "owner": "권태윤",
    "subOwner": "노하람",
    "ownerEmail": "tykwon@company.com",
    "plannedStart": "2026-08-19T09:00",
    "plannedEnd": "2026-08-19T18:00",
    "actualStart": "2026-08-19T09:00",
    "actualEnd": "2026-08-19T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0083",
    "phase": "2단계 - 데이터이관",
    "system": "카드계",
    "work": "데이터이관",
    "item": "카드계 데이터이관",
    "task": "카드계 데이터이관 - 1차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0082"
    ],
    "successor": [
      "MIG-0084"
    ],
    "deliverable": "1차 검증 결과서",
    "owner": "노하람",
    "subOwner": "백승우",
    "ownerEmail": "hrno@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0084",
    "phase": "2단계 - 데이터이관",
    "system": "카드계",
    "work": "데이터이관",
    "item": "카드계 데이터이관",
    "task": "카드계 데이터이관 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0083"
    ],
    "successor": [
      "MIG-0085"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "노하람",
    "subOwner": "백승우",
    "ownerEmail": "hrno@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0085",
    "phase": "2단계 - 데이터이관",
    "system": "카드계",
    "work": "데이터이관",
    "item": "카드계 데이터이관",
    "task": "카드계 데이터이관 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0084"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "백승우",
    "subOwner": "유채원",
    "ownerEmail": "swbaek@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0086",
    "phase": "3단계 - 정합성검증",
    "system": "카드계",
    "work": "정합성검증",
    "item": "카드계 정합성검증",
    "task": "카드계 정합성검증 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0087"
    ],
    "deliverable": "착수 및 요건 확인 결과서",
    "owner": "노하람",
    "subOwner": "백승우",
    "ownerEmail": "hrno@company.com",
    "plannedStart": "2026-08-18T09:00",
    "plannedEnd": "2026-08-18T18:00",
    "actualStart": "2026-08-18T09:00",
    "actualEnd": "2026-08-18T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0087",
    "phase": "3단계 - 정합성검증",
    "system": "카드계",
    "work": "정합성검증",
    "item": "카드계 정합성검증",
    "task": "카드계 정합성검증 - 설계 및 개발",
    "critical": false,
    "predecessor": [
      "MIG-0086"
    ],
    "successor": [
      "MIG-0088"
    ],
    "deliverable": "설계 및 개발 결과서",
    "owner": "노하람",
    "subOwner": "백승우",
    "ownerEmail": "hrno@company.com",
    "plannedStart": "2026-08-19T09:00",
    "plannedEnd": "2026-08-19T18:00",
    "actualStart": "2026-08-19T09:00",
    "actualEnd": "2026-08-19T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0088",
    "phase": "3단계 - 정합성검증",
    "system": "카드계",
    "work": "정합성검증",
    "item": "카드계 정합성검증",
    "task": "카드계 정합성검증 - 1차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0087"
    ],
    "successor": [
      "MIG-0089"
    ],
    "deliverable": "1차 검증 결과서",
    "owner": "백승우",
    "subOwner": "유채원",
    "ownerEmail": "swbaek@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0089",
    "phase": "3단계 - 정합성검증",
    "system": "카드계",
    "work": "정합성검증",
    "item": "카드계 정합성검증",
    "task": "카드계 정합성검증 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0088"
    ],
    "successor": [
      "MIG-0090"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "백승우",
    "subOwner": "유채원",
    "ownerEmail": "swbaek@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0090",
    "phase": "3단계 - 정합성검증",
    "system": "카드계",
    "work": "정합성검증",
    "item": "카드계 정합성검증",
    "task": "카드계 정합성검증 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0089"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "유채원",
    "subOwner": "김도윤",
    "ownerEmail": "cwyu@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0091",
    "phase": "4단계 - 통합테스트",
    "system": "카드계",
    "work": "통합테스트",
    "item": "카드계 통합테스트",
    "task": "카드계 통합테스트 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0092"
    ],
    "deliverable": "착수 및 요건 확인 결과서",
    "owner": "백승우",
    "subOwner": "유채원",
    "ownerEmail": "swbaek@company.com",
    "plannedStart": "2026-08-18T09:00",
    "plannedEnd": "2026-08-18T18:00",
    "actualStart": "2026-08-18T09:00",
    "actualEnd": "2026-08-18T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0092",
    "phase": "4단계 - 통합테스트",
    "system": "카드계",
    "work": "통합테스트",
    "item": "카드계 통합테스트",
    "task": "카드계 통합테스트 - 설계 및 개발",
    "critical": false,
    "predecessor": [
      "MIG-0091"
    ],
    "successor": [
      "MIG-0093"
    ],
    "deliverable": "설계 및 개발 결과서",
    "owner": "백승우",
    "subOwner": "유채원",
    "ownerEmail": "swbaek@company.com",
    "plannedStart": "2026-08-19T09:00",
    "plannedEnd": "2026-08-19T18:00",
    "actualStart": "2026-08-19T09:00",
    "actualEnd": "2026-08-19T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0093",
    "phase": "4단계 - 통합테스트",
    "system": "카드계",
    "work": "통합테스트",
    "item": "카드계 통합테스트",
    "task": "카드계 통합테스트 - 1차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0092"
    ],
    "successor": [
      "MIG-0094"
    ],
    "deliverable": "1차 검증 결과서",
    "owner": "유채원",
    "subOwner": "김도윤",
    "ownerEmail": "cwyu@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0094",
    "phase": "4단계 - 통합테스트",
    "system": "카드계",
    "work": "통합테스트",
    "item": "카드계 통합테스트",
    "task": "카드계 통합테스트 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0093"
    ],
    "successor": [
      "MIG-0095"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "유채원",
    "subOwner": "김도윤",
    "ownerEmail": "cwyu@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0095",
    "phase": "4단계 - 통합테스트",
    "system": "카드계",
    "work": "통합테스트",
    "item": "카드계 통합테스트",
    "task": "카드계 통합테스트 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0094"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "김도윤",
    "subOwner": "이서연",
    "ownerEmail": "dykim@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0096",
    "phase": "5단계 - 전환리허설",
    "system": "카드계",
    "work": "전환리허설",
    "item": "카드계 전환리허설",
    "task": "카드계 전환리허설 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0097"
    ],
    "deliverable": "착수 및 요건 확인 결과서",
    "owner": "유채원",
    "subOwner": "김도윤",
    "ownerEmail": "cwyu@company.com",
    "plannedStart": "2026-08-18T09:00",
    "plannedEnd": "2026-08-18T18:00",
    "actualStart": "2026-08-18T09:00",
    "actualEnd": "2026-08-18T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0097",
    "phase": "5단계 - 전환리허설",
    "system": "카드계",
    "work": "전환리허설",
    "item": "카드계 전환리허설",
    "task": "카드계 전환리허설 - 설계 및 개발",
    "critical": false,
    "predecessor": [
      "MIG-0096"
    ],
    "successor": [
      "MIG-0098"
    ],
    "deliverable": "설계 및 개발 결과서",
    "owner": "유채원",
    "subOwner": "김도윤",
    "ownerEmail": "cwyu@company.com",
    "plannedStart": "2026-08-19T09:00",
    "plannedEnd": "2026-08-19T18:00",
    "actualStart": "2026-08-19T09:00",
    "actualEnd": "2026-08-19T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0098",
    "phase": "5단계 - 전환리허설",
    "system": "카드계",
    "work": "전환리허설",
    "item": "카드계 전환리허설",
    "task": "카드계 전환리허설 - 1차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0097"
    ],
    "successor": [
      "MIG-0099"
    ],
    "deliverable": "1차 검증 결과서",
    "owner": "김도윤",
    "subOwner": "이서연",
    "ownerEmail": "dykim@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0099",
    "phase": "5단계 - 전환리허설",
    "system": "카드계",
    "work": "전환리허설",
    "item": "카드계 전환리허설",
    "task": "카드계 전환리허설 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0098"
    ],
    "successor": [
      "MIG-0100"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "김도윤",
    "subOwner": "이서연",
    "ownerEmail": "dykim@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0100",
    "phase": "5단계 - 전환리허설",
    "system": "카드계",
    "work": "전환리허설",
    "item": "카드계 전환리허설",
    "task": "카드계 전환리허설 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0099"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "이서연",
    "subOwner": "박민재",
    "ownerEmail": "sylee@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  }
];

export const statusStyle = {
  완료: "bg-teal-500/10 text-teal-600 border-teal-500/30",
  진행중: "bg-navy-800/10 text-navy-800 border-navy-800/30",
  예정: "bg-slate-200 text-navy-800/60 border-slate-300",
  지연: "bg-rose-600/10 text-rose-600 border-rose-600/30",
};
