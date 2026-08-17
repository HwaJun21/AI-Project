// 확정된 데이터 모델: Task ID, 5단계 분류(단계/시스템/업무/항목/작업),
// Critical Path, 선후행 Task ID(후행은 자동 계산), 산출물, 담당자, 계획/실적 일시
// 시나리오: 담당자 20명 x 프로젝트 10일 x 2개 시스템 x 5개 업무영역(체인) = 100개 작업

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
    "task": "고객계정계 환경구축 - 상세 설계",
    "critical": true,
    "predecessor": [
      "MIG-0001"
    ],
    "successor": [
      "MIG-0003"
    ],
    "deliverable": "상세 설계 결과서",
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
    "task": "고객계정계 환경구축 - 개발/구성 착수",
    "critical": true,
    "predecessor": [
      "MIG-0002"
    ],
    "successor": [
      "MIG-0004"
    ],
    "deliverable": "개발/구성 착수 결과서",
    "owner": "김도윤",
    "subOwner": "이서연",
    "ownerEmail": "dykim@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": "2026-08-20T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0004",
    "phase": "1단계 - 사전준비",
    "system": "고객계정계",
    "work": "환경구축",
    "item": "고객계정계 환경구축",
    "task": "고객계정계 환경구축 - 1차 구현 완료",
    "critical": true,
    "predecessor": [
      "MIG-0003"
    ],
    "successor": [
      "MIG-0005"
    ],
    "deliverable": "1차 구현 완료 결과서",
    "owner": "김도윤",
    "subOwner": "이서연",
    "ownerEmail": "dykim@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": "2026-08-21T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0005",
    "phase": "1단계 - 사전준비",
    "system": "고객계정계",
    "work": "환경구축",
    "item": "고객계정계 환경구축",
    "task": "고객계정계 환경구축 - 1차 검토",
    "critical": true,
    "predecessor": [
      "MIG-0004"
    ],
    "successor": [
      "MIG-0006"
    ],
    "deliverable": "1차 검토 결과서",
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
    "id": "MIG-0006",
    "phase": "1단계 - 사전준비",
    "system": "고객계정계",
    "work": "환경구축",
    "item": "고객계정계 환경구축",
    "task": "고객계정계 환경구축 - 보완 조치",
    "critical": true,
    "predecessor": [
      "MIG-0005"
    ],
    "successor": [
      "MIG-0007"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "이서연",
    "subOwner": "박민재",
    "ownerEmail": "sylee@company.com",
    "plannedStart": "2026-08-23T09:00",
    "plannedEnd": "2026-08-23T18:00",
    "actualStart": "2026-08-23T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0007",
    "phase": "1단계 - 사전준비",
    "system": "고객계정계",
    "work": "환경구축",
    "item": "고객계정계 환경구축",
    "task": "고객계정계 환경구축 - 2차 검증",
    "critical": true,
    "predecessor": [
      "MIG-0006"
    ],
    "successor": [
      "MIG-0008"
    ],
    "deliverable": "2차 검증 결과서",
    "owner": "이서연",
    "subOwner": "박민재",
    "ownerEmail": "sylee@company.com",
    "plannedStart": "2026-08-24T09:00",
    "plannedEnd": "2026-08-24T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0008",
    "phase": "1단계 - 사전준비",
    "system": "고객계정계",
    "work": "환경구축",
    "item": "고객계정계 환경구축",
    "task": "고객계정계 환경구축 - 성능/부하 확인",
    "critical": true,
    "predecessor": [
      "MIG-0007"
    ],
    "successor": [
      "MIG-0009"
    ],
    "deliverable": "성능/부하 확인 결과서",
    "owner": "이서연",
    "subOwner": "박민재",
    "ownerEmail": "sylee@company.com",
    "plannedStart": "2026-08-25T09:00",
    "plannedEnd": "2026-08-25T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0009",
    "phase": "1단계 - 사전준비",
    "system": "고객계정계",
    "work": "환경구축",
    "item": "고객계정계 환경구축",
    "task": "고객계정계 환경구축 - 최종 리허설",
    "critical": true,
    "predecessor": [
      "MIG-0008"
    ],
    "successor": [
      "MIG-0010"
    ],
    "deliverable": "최종 리허설 결과서",
    "owner": "이서연",
    "subOwner": "박민재",
    "ownerEmail": "sylee@company.com",
    "plannedStart": "2026-08-26T09:00",
    "plannedEnd": "2026-08-26T18:00",
    "actualStart": "2026-08-26T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0010",
    "phase": "1단계 - 사전준비",
    "system": "고객계정계",
    "work": "환경구축",
    "item": "고객계정계 환경구축",
    "task": "고객계정계 환경구축 - 완료 보고",
    "critical": true,
    "predecessor": [
      "MIG-0009"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "이서연",
    "subOwner": "박민재",
    "ownerEmail": "sylee@company.com",
    "plannedStart": "2026-08-27T09:00",
    "plannedEnd": "2026-08-27T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0011",
    "phase": "2단계 - 데이터이관",
    "system": "고객계정계",
    "work": "데이터이관",
    "item": "고객계정계 데이터이관",
    "task": "고객계정계 데이터이관 - 착수 및 요건 확인",
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
    "phase": "2단계 - 데이터이관",
    "system": "고객계정계",
    "work": "데이터이관",
    "item": "고객계정계 데이터이관",
    "task": "고객계정계 데이터이관 - 상세 설계",
    "critical": false,
    "predecessor": [
      "MIG-0011"
    ],
    "successor": [
      "MIG-0013"
    ],
    "deliverable": "상세 설계 결과서",
    "owner": "박민재",
    "subOwner": "최지훈",
    "ownerEmail": "mjpark@company.com",
    "plannedStart": "2026-08-19T09:00",
    "plannedEnd": "2026-08-19T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0013",
    "phase": "2단계 - 데이터이관",
    "system": "고객계정계",
    "work": "데이터이관",
    "item": "고객계정계 데이터이관",
    "task": "고객계정계 데이터이관 - 개발/구성 착수",
    "critical": false,
    "predecessor": [
      "MIG-0012"
    ],
    "successor": [
      "MIG-0014"
    ],
    "deliverable": "개발/구성 착수 결과서",
    "owner": "박민재",
    "subOwner": "최지훈",
    "ownerEmail": "mjpark@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": "2026-08-20T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0014",
    "phase": "2단계 - 데이터이관",
    "system": "고객계정계",
    "work": "데이터이관",
    "item": "고객계정계 데이터이관",
    "task": "고객계정계 데이터이관 - 1차 구현 완료",
    "critical": false,
    "predecessor": [
      "MIG-0013"
    ],
    "successor": [
      "MIG-0015"
    ],
    "deliverable": "1차 구현 완료 결과서",
    "owner": "박민재",
    "subOwner": "최지훈",
    "ownerEmail": "mjpark@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": "2026-08-21T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0015",
    "phase": "2단계 - 데이터이관",
    "system": "고객계정계",
    "work": "데이터이관",
    "item": "고객계정계 데이터이관",
    "task": "고객계정계 데이터이관 - 1차 검토",
    "critical": false,
    "predecessor": [
      "MIG-0014"
    ],
    "successor": [
      "MIG-0016"
    ],
    "deliverable": "1차 검토 결과서",
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
    "id": "MIG-0016",
    "phase": "2단계 - 데이터이관",
    "system": "고객계정계",
    "work": "데이터이관",
    "item": "고객계정계 데이터이관",
    "task": "고객계정계 데이터이관 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0015"
    ],
    "successor": [
      "MIG-0017"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "최지훈",
    "subOwner": "정하은",
    "ownerEmail": "jhchoi@company.com",
    "plannedStart": "2026-08-23T09:00",
    "plannedEnd": "2026-08-23T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0017",
    "phase": "2단계 - 데이터이관",
    "system": "고객계정계",
    "work": "데이터이관",
    "item": "고객계정계 데이터이관",
    "task": "고객계정계 데이터이관 - 2차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0016"
    ],
    "successor": [
      "MIG-0018"
    ],
    "deliverable": "2차 검증 결과서",
    "owner": "최지훈",
    "subOwner": "정하은",
    "ownerEmail": "jhchoi@company.com",
    "plannedStart": "2026-08-24T09:00",
    "plannedEnd": "2026-08-24T18:00",
    "actualStart": "2026-08-24T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0018",
    "phase": "2단계 - 데이터이관",
    "system": "고객계정계",
    "work": "데이터이관",
    "item": "고객계정계 데이터이관",
    "task": "고객계정계 데이터이관 - 성능/부하 확인",
    "critical": false,
    "predecessor": [
      "MIG-0017"
    ],
    "successor": [
      "MIG-0019"
    ],
    "deliverable": "성능/부하 확인 결과서",
    "owner": "최지훈",
    "subOwner": "정하은",
    "ownerEmail": "jhchoi@company.com",
    "plannedStart": "2026-08-25T09:00",
    "plannedEnd": "2026-08-25T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0019",
    "phase": "2단계 - 데이터이관",
    "system": "고객계정계",
    "work": "데이터이관",
    "item": "고객계정계 데이터이관",
    "task": "고객계정계 데이터이관 - 최종 리허설",
    "critical": false,
    "predecessor": [
      "MIG-0018"
    ],
    "successor": [
      "MIG-0020"
    ],
    "deliverable": "최종 리허설 결과서",
    "owner": "최지훈",
    "subOwner": "정하은",
    "ownerEmail": "jhchoi@company.com",
    "plannedStart": "2026-08-26T09:00",
    "plannedEnd": "2026-08-26T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0020",
    "phase": "2단계 - 데이터이관",
    "system": "고객계정계",
    "work": "데이터이관",
    "item": "고객계정계 데이터이관",
    "task": "고객계정계 데이터이관 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0019"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "최지훈",
    "subOwner": "정하은",
    "ownerEmail": "jhchoi@company.com",
    "plannedStart": "2026-08-27T09:00",
    "plannedEnd": "2026-08-27T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0021",
    "phase": "3단계 - 정합성검증",
    "system": "고객계정계",
    "work": "정합성검증",
    "item": "고객계정계 정합성검증",
    "task": "고객계정계 정합성검증 - 착수 및 요건 확인",
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
    "actualStart": "2026-08-18T09:00",
    "actualEnd": "2026-08-18T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0022",
    "phase": "3단계 - 정합성검증",
    "system": "고객계정계",
    "work": "정합성검증",
    "item": "고객계정계 정합성검증",
    "task": "고객계정계 정합성검증 - 상세 설계",
    "critical": false,
    "predecessor": [
      "MIG-0021"
    ],
    "successor": [
      "MIG-0023"
    ],
    "deliverable": "상세 설계 결과서",
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
    "phase": "3단계 - 정합성검증",
    "system": "고객계정계",
    "work": "정합성검증",
    "item": "고객계정계 정합성검증",
    "task": "고객계정계 정합성검증 - 개발/구성 착수",
    "critical": false,
    "predecessor": [
      "MIG-0022"
    ],
    "successor": [
      "MIG-0024"
    ],
    "deliverable": "개발/구성 착수 결과서",
    "owner": "정하은",
    "subOwner": "강서준",
    "ownerEmail": "hejung@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": "2026-08-20T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0024",
    "phase": "3단계 - 정합성검증",
    "system": "고객계정계",
    "work": "정합성검증",
    "item": "고객계정계 정합성검증",
    "task": "고객계정계 정합성검증 - 1차 구현 완료",
    "critical": false,
    "predecessor": [
      "MIG-0023"
    ],
    "successor": [
      "MIG-0025"
    ],
    "deliverable": "1차 구현 완료 결과서",
    "owner": "정하은",
    "subOwner": "강서준",
    "ownerEmail": "hejung@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0025",
    "phase": "3단계 - 정합성검증",
    "system": "고객계정계",
    "work": "정합성검증",
    "item": "고객계정계 정합성검증",
    "task": "고객계정계 정합성검증 - 1차 검토",
    "critical": false,
    "predecessor": [
      "MIG-0024"
    ],
    "successor": [
      "MIG-0026"
    ],
    "deliverable": "1차 검토 결과서",
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
    "id": "MIG-0026",
    "phase": "3단계 - 정합성검증",
    "system": "고객계정계",
    "work": "정합성검증",
    "item": "고객계정계 정합성검증",
    "task": "고객계정계 정합성검증 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0025"
    ],
    "successor": [
      "MIG-0027"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "강서준",
    "subOwner": "윤지우",
    "ownerEmail": "sjkang@company.com",
    "plannedStart": "2026-08-23T09:00",
    "plannedEnd": "2026-08-23T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0027",
    "phase": "3단계 - 정합성검증",
    "system": "고객계정계",
    "work": "정합성검증",
    "item": "고객계정계 정합성검증",
    "task": "고객계정계 정합성검증 - 2차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0026"
    ],
    "successor": [
      "MIG-0028"
    ],
    "deliverable": "2차 검증 결과서",
    "owner": "강서준",
    "subOwner": "윤지우",
    "ownerEmail": "sjkang@company.com",
    "plannedStart": "2026-08-24T09:00",
    "plannedEnd": "2026-08-24T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0028",
    "phase": "3단계 - 정합성검증",
    "system": "고객계정계",
    "work": "정합성검증",
    "item": "고객계정계 정합성검증",
    "task": "고객계정계 정합성검증 - 성능/부하 확인",
    "critical": false,
    "predecessor": [
      "MIG-0027"
    ],
    "successor": [
      "MIG-0029"
    ],
    "deliverable": "성능/부하 확인 결과서",
    "owner": "강서준",
    "subOwner": "윤지우",
    "ownerEmail": "sjkang@company.com",
    "plannedStart": "2026-08-25T09:00",
    "plannedEnd": "2026-08-25T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0029",
    "phase": "3단계 - 정합성검증",
    "system": "고객계정계",
    "work": "정합성검증",
    "item": "고객계정계 정합성검증",
    "task": "고객계정계 정합성검증 - 최종 리허설",
    "critical": false,
    "predecessor": [
      "MIG-0028"
    ],
    "successor": [
      "MIG-0030"
    ],
    "deliverable": "최종 리허설 결과서",
    "owner": "강서준",
    "subOwner": "윤지우",
    "ownerEmail": "sjkang@company.com",
    "plannedStart": "2026-08-26T09:00",
    "plannedEnd": "2026-08-26T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0030",
    "phase": "3단계 - 정합성검증",
    "system": "고객계정계",
    "work": "정합성검증",
    "item": "고객계정계 정합성검증",
    "task": "고객계정계 정합성검증 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0029"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "강서준",
    "subOwner": "윤지우",
    "ownerEmail": "sjkang@company.com",
    "plannedStart": "2026-08-27T09:00",
    "plannedEnd": "2026-08-27T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0031",
    "phase": "4단계 - 통합테스트",
    "system": "고객계정계",
    "work": "통합테스트",
    "item": "고객계정계 통합테스트",
    "task": "고객계정계 통합테스트 - 착수 및 요건 확인",
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
    "phase": "4단계 - 통합테스트",
    "system": "고객계정계",
    "work": "통합테스트",
    "item": "고객계정계 통합테스트",
    "task": "고객계정계 통합테스트 - 상세 설계",
    "critical": false,
    "predecessor": [
      "MIG-0031"
    ],
    "successor": [
      "MIG-0033"
    ],
    "deliverable": "상세 설계 결과서",
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
    "phase": "4단계 - 통합테스트",
    "system": "고객계정계",
    "work": "통합테스트",
    "item": "고객계정계 통합테스트",
    "task": "고객계정계 통합테스트 - 개발/구성 착수",
    "critical": false,
    "predecessor": [
      "MIG-0032"
    ],
    "successor": [
      "MIG-0034"
    ],
    "deliverable": "개발/구성 착수 결과서",
    "owner": "윤지우",
    "subOwner": "임하윤",
    "ownerEmail": "jwyoon@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": "2026-08-20T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0034",
    "phase": "4단계 - 통합테스트",
    "system": "고객계정계",
    "work": "통합테스트",
    "item": "고객계정계 통합테스트",
    "task": "고객계정계 통합테스트 - 1차 구현 완료",
    "critical": false,
    "predecessor": [
      "MIG-0033"
    ],
    "successor": [
      "MIG-0035"
    ],
    "deliverable": "1차 구현 완료 결과서",
    "owner": "윤지우",
    "subOwner": "임하윤",
    "ownerEmail": "jwyoon@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": "2026-08-21T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0035",
    "phase": "4단계 - 통합테스트",
    "system": "고객계정계",
    "work": "통합테스트",
    "item": "고객계정계 통합테스트",
    "task": "고객계정계 통합테스트 - 1차 검토",
    "critical": false,
    "predecessor": [
      "MIG-0034"
    ],
    "successor": [
      "MIG-0036"
    ],
    "deliverable": "1차 검토 결과서",
    "owner": "윤지우",
    "subOwner": "임하윤",
    "ownerEmail": "jwyoon@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": "2026-08-22T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0036",
    "phase": "4단계 - 통합테스트",
    "system": "고객계정계",
    "work": "통합테스트",
    "item": "고객계정계 통합테스트",
    "task": "고객계정계 통합테스트 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0035"
    ],
    "successor": [
      "MIG-0037"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "임하윤",
    "subOwner": "한소율",
    "ownerEmail": "hylim@company.com",
    "plannedStart": "2026-08-23T09:00",
    "plannedEnd": "2026-08-23T18:00",
    "actualStart": "2026-08-23T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0037",
    "phase": "4단계 - 통합테스트",
    "system": "고객계정계",
    "work": "통합테스트",
    "item": "고객계정계 통합테스트",
    "task": "고객계정계 통합테스트 - 2차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0036"
    ],
    "successor": [
      "MIG-0038"
    ],
    "deliverable": "2차 검증 결과서",
    "owner": "임하윤",
    "subOwner": "한소율",
    "ownerEmail": "hylim@company.com",
    "plannedStart": "2026-08-24T09:00",
    "plannedEnd": "2026-08-24T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0038",
    "phase": "4단계 - 통합테스트",
    "system": "고객계정계",
    "work": "통합테스트",
    "item": "고객계정계 통합테스트",
    "task": "고객계정계 통합테스트 - 성능/부하 확인",
    "critical": false,
    "predecessor": [
      "MIG-0037"
    ],
    "successor": [
      "MIG-0039"
    ],
    "deliverable": "성능/부하 확인 결과서",
    "owner": "임하윤",
    "subOwner": "한소율",
    "ownerEmail": "hylim@company.com",
    "plannedStart": "2026-08-25T09:00",
    "plannedEnd": "2026-08-25T18:00",
    "actualStart": "2026-08-25T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0039",
    "phase": "4단계 - 통합테스트",
    "system": "고객계정계",
    "work": "통합테스트",
    "item": "고객계정계 통합테스트",
    "task": "고객계정계 통합테스트 - 최종 리허설",
    "critical": false,
    "predecessor": [
      "MIG-0038"
    ],
    "successor": [
      "MIG-0040"
    ],
    "deliverable": "최종 리허설 결과서",
    "owner": "임하윤",
    "subOwner": "한소율",
    "ownerEmail": "hylim@company.com",
    "plannedStart": "2026-08-26T09:00",
    "plannedEnd": "2026-08-26T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0040",
    "phase": "4단계 - 통합테스트",
    "system": "고객계정계",
    "work": "통합테스트",
    "item": "고객계정계 통합테스트",
    "task": "고객계정계 통합테스트 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0039"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "임하윤",
    "subOwner": "한소율",
    "ownerEmail": "hylim@company.com",
    "plannedStart": "2026-08-27T09:00",
    "plannedEnd": "2026-08-27T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0041",
    "phase": "5단계 - 전환리허설",
    "system": "고객계정계",
    "work": "전환리허설",
    "item": "고객계정계 전환리허설",
    "task": "고객계정계 전환리허설 - 착수 및 요건 확인",
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
    "phase": "5단계 - 전환리허설",
    "system": "고객계정계",
    "work": "전환리허설",
    "item": "고객계정계 전환리허설",
    "task": "고객계정계 전환리허설 - 상세 설계",
    "critical": false,
    "predecessor": [
      "MIG-0041"
    ],
    "successor": [
      "MIG-0043"
    ],
    "deliverable": "상세 설계 결과서",
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
    "phase": "5단계 - 전환리허설",
    "system": "고객계정계",
    "work": "전환리허설",
    "item": "고객계정계 전환리허설",
    "task": "고객계정계 전환리허설 - 개발/구성 착수",
    "critical": false,
    "predecessor": [
      "MIG-0042"
    ],
    "successor": [
      "MIG-0044"
    ],
    "deliverable": "개발/구성 착수 결과서",
    "owner": "한소율",
    "subOwner": "오예준",
    "ownerEmail": "syhan@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": "2026-08-20T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0044",
    "phase": "5단계 - 전환리허설",
    "system": "고객계정계",
    "work": "전환리허설",
    "item": "고객계정계 전환리허설",
    "task": "고객계정계 전환리허설 - 1차 구현 완료",
    "critical": false,
    "predecessor": [
      "MIG-0043"
    ],
    "successor": [
      "MIG-0045"
    ],
    "deliverable": "1차 구현 완료 결과서",
    "owner": "한소율",
    "subOwner": "오예준",
    "ownerEmail": "syhan@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0045",
    "phase": "5단계 - 전환리허설",
    "system": "고객계정계",
    "work": "전환리허설",
    "item": "고객계정계 전환리허설",
    "task": "고객계정계 전환리허설 - 1차 검토",
    "critical": false,
    "predecessor": [
      "MIG-0044"
    ],
    "successor": [
      "MIG-0046"
    ],
    "deliverable": "1차 검토 결과서",
    "owner": "한소율",
    "subOwner": "오예준",
    "ownerEmail": "syhan@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0046",
    "phase": "5단계 - 전환리허설",
    "system": "고객계정계",
    "work": "전환리허설",
    "item": "고객계정계 전환리허설",
    "task": "고객계정계 전환리허설 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0045"
    ],
    "successor": [
      "MIG-0047"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "오예준",
    "subOwner": "서지민",
    "ownerEmail": "yjoh@company.com",
    "plannedStart": "2026-08-23T09:00",
    "plannedEnd": "2026-08-23T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0047",
    "phase": "5단계 - 전환리허설",
    "system": "고객계정계",
    "work": "전환리허설",
    "item": "고객계정계 전환리허설",
    "task": "고객계정계 전환리허설 - 2차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0046"
    ],
    "successor": [
      "MIG-0048"
    ],
    "deliverable": "2차 검증 결과서",
    "owner": "오예준",
    "subOwner": "서지민",
    "ownerEmail": "yjoh@company.com",
    "plannedStart": "2026-08-24T09:00",
    "plannedEnd": "2026-08-24T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0048",
    "phase": "5단계 - 전환리허설",
    "system": "고객계정계",
    "work": "전환리허설",
    "item": "고객계정계 전환리허설",
    "task": "고객계정계 전환리허설 - 성능/부하 확인",
    "critical": false,
    "predecessor": [
      "MIG-0047"
    ],
    "successor": [
      "MIG-0049"
    ],
    "deliverable": "성능/부하 확인 결과서",
    "owner": "오예준",
    "subOwner": "서지민",
    "ownerEmail": "yjoh@company.com",
    "plannedStart": "2026-08-25T09:00",
    "plannedEnd": "2026-08-25T18:00",
    "actualStart": "2026-08-25T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0049",
    "phase": "5단계 - 전환리허설",
    "system": "고객계정계",
    "work": "전환리허설",
    "item": "고객계정계 전환리허설",
    "task": "고객계정계 전환리허설 - 최종 리허설",
    "critical": false,
    "predecessor": [
      "MIG-0048"
    ],
    "successor": [
      "MIG-0050"
    ],
    "deliverable": "최종 리허설 결과서",
    "owner": "오예준",
    "subOwner": "서지민",
    "ownerEmail": "yjoh@company.com",
    "plannedStart": "2026-08-26T09:00",
    "plannedEnd": "2026-08-26T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0050",
    "phase": "5단계 - 전환리허설",
    "system": "고객계정계",
    "work": "전환리허설",
    "item": "고객계정계 전환리허설",
    "task": "고객계정계 전환리허설 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0049"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "오예준",
    "subOwner": "서지민",
    "ownerEmail": "yjoh@company.com",
    "plannedStart": "2026-08-27T09:00",
    "plannedEnd": "2026-08-27T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0051",
    "phase": "1단계 - 사전준비",
    "system": "여신계",
    "work": "환경구축",
    "item": "여신계 환경구축",
    "task": "여신계 환경구축 - 착수 및 요건 확인",
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
    "system": "여신계",
    "work": "환경구축",
    "item": "여신계 환경구축",
    "task": "여신계 환경구축 - 상세 설계",
    "critical": false,
    "predecessor": [
      "MIG-0051"
    ],
    "successor": [
      "MIG-0053"
    ],
    "deliverable": "상세 설계 결과서",
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
    "system": "여신계",
    "work": "환경구축",
    "item": "여신계 환경구축",
    "task": "여신계 환경구축 - 개발/구성 착수",
    "critical": false,
    "predecessor": [
      "MIG-0052"
    ],
    "successor": [
      "MIG-0054"
    ],
    "deliverable": "개발/구성 착수 결과서",
    "owner": "서지민",
    "subOwner": "신다인",
    "ownerEmail": "jmseo@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": "2026-08-20T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0054",
    "phase": "1단계 - 사전준비",
    "system": "여신계",
    "work": "환경구축",
    "item": "여신계 환경구축",
    "task": "여신계 환경구축 - 1차 구현 완료",
    "critical": false,
    "predecessor": [
      "MIG-0053"
    ],
    "successor": [
      "MIG-0055"
    ],
    "deliverable": "1차 구현 완료 결과서",
    "owner": "서지민",
    "subOwner": "신다인",
    "ownerEmail": "jmseo@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": "2026-08-21T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0055",
    "phase": "1단계 - 사전준비",
    "system": "여신계",
    "work": "환경구축",
    "item": "여신계 환경구축",
    "task": "여신계 환경구축 - 1차 검토",
    "critical": false,
    "predecessor": [
      "MIG-0054"
    ],
    "successor": [
      "MIG-0056"
    ],
    "deliverable": "1차 검토 결과서",
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
    "id": "MIG-0056",
    "phase": "1단계 - 사전준비",
    "system": "여신계",
    "work": "환경구축",
    "item": "여신계 환경구축",
    "task": "여신계 환경구축 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0055"
    ],
    "successor": [
      "MIG-0057"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "신다인",
    "subOwner": "조은우",
    "ownerEmail": "dishin@company.com",
    "plannedStart": "2026-08-23T09:00",
    "plannedEnd": "2026-08-23T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0057",
    "phase": "1단계 - 사전준비",
    "system": "여신계",
    "work": "환경구축",
    "item": "여신계 환경구축",
    "task": "여신계 환경구축 - 2차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0056"
    ],
    "successor": [
      "MIG-0058"
    ],
    "deliverable": "2차 검증 결과서",
    "owner": "신다인",
    "subOwner": "조은우",
    "ownerEmail": "dishin@company.com",
    "plannedStart": "2026-08-24T09:00",
    "plannedEnd": "2026-08-24T18:00",
    "actualStart": "2026-08-24T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0058",
    "phase": "1단계 - 사전준비",
    "system": "여신계",
    "work": "환경구축",
    "item": "여신계 환경구축",
    "task": "여신계 환경구축 - 성능/부하 확인",
    "critical": false,
    "predecessor": [
      "MIG-0057"
    ],
    "successor": [
      "MIG-0059"
    ],
    "deliverable": "성능/부하 확인 결과서",
    "owner": "신다인",
    "subOwner": "조은우",
    "ownerEmail": "dishin@company.com",
    "plannedStart": "2026-08-25T09:00",
    "plannedEnd": "2026-08-25T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0059",
    "phase": "1단계 - 사전준비",
    "system": "여신계",
    "work": "환경구축",
    "item": "여신계 환경구축",
    "task": "여신계 환경구축 - 최종 리허설",
    "critical": false,
    "predecessor": [
      "MIG-0058"
    ],
    "successor": [
      "MIG-0060"
    ],
    "deliverable": "최종 리허설 결과서",
    "owner": "신다인",
    "subOwner": "조은우",
    "ownerEmail": "dishin@company.com",
    "plannedStart": "2026-08-26T09:00",
    "plannedEnd": "2026-08-26T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0060",
    "phase": "1단계 - 사전준비",
    "system": "여신계",
    "work": "환경구축",
    "item": "여신계 환경구축",
    "task": "여신계 환경구축 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0059"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "신다인",
    "subOwner": "조은우",
    "ownerEmail": "dishin@company.com",
    "plannedStart": "2026-08-27T09:00",
    "plannedEnd": "2026-08-27T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0061",
    "phase": "2단계 - 데이터이관",
    "system": "여신계",
    "work": "데이터이관",
    "item": "여신계 데이터이관",
    "task": "여신계 데이터이관 - 착수 및 요건 확인",
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
    "phase": "2단계 - 데이터이관",
    "system": "여신계",
    "work": "데이터이관",
    "item": "여신계 데이터이관",
    "task": "여신계 데이터이관 - 상세 설계",
    "critical": false,
    "predecessor": [
      "MIG-0061"
    ],
    "successor": [
      "MIG-0063"
    ],
    "deliverable": "상세 설계 결과서",
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
    "phase": "2단계 - 데이터이관",
    "system": "여신계",
    "work": "데이터이관",
    "item": "여신계 데이터이관",
    "task": "여신계 데이터이관 - 개발/구성 착수",
    "critical": false,
    "predecessor": [
      "MIG-0062"
    ],
    "successor": [
      "MIG-0064"
    ],
    "deliverable": "개발/구성 착수 결과서",
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
    "id": "MIG-0064",
    "phase": "2단계 - 데이터이관",
    "system": "여신계",
    "work": "데이터이관",
    "item": "여신계 데이터이관",
    "task": "여신계 데이터이관 - 1차 구현 완료",
    "critical": false,
    "predecessor": [
      "MIG-0063"
    ],
    "successor": [
      "MIG-0065"
    ],
    "deliverable": "1차 구현 완료 결과서",
    "owner": "조은우",
    "subOwner": "배수아",
    "ownerEmail": "ewcho@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": "2026-08-21T09:00",
    "actualEnd": "2026-08-21T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0065",
    "phase": "2단계 - 데이터이관",
    "system": "여신계",
    "work": "데이터이관",
    "item": "여신계 데이터이관",
    "task": "여신계 데이터이관 - 1차 검토",
    "critical": false,
    "predecessor": [
      "MIG-0064"
    ],
    "successor": [
      "MIG-0066"
    ],
    "deliverable": "1차 검토 결과서",
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
    "id": "MIG-0066",
    "phase": "2단계 - 데이터이관",
    "system": "여신계",
    "work": "데이터이관",
    "item": "여신계 데이터이관",
    "task": "여신계 데이터이관 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0065"
    ],
    "successor": [
      "MIG-0067"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "배수아",
    "subOwner": "남도현",
    "ownerEmail": "sabae@company.com",
    "plannedStart": "2026-08-23T09:00",
    "plannedEnd": "2026-08-23T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0067",
    "phase": "2단계 - 데이터이관",
    "system": "여신계",
    "work": "데이터이관",
    "item": "여신계 데이터이관",
    "task": "여신계 데이터이관 - 2차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0066"
    ],
    "successor": [
      "MIG-0068"
    ],
    "deliverable": "2차 검증 결과서",
    "owner": "배수아",
    "subOwner": "남도현",
    "ownerEmail": "sabae@company.com",
    "plannedStart": "2026-08-24T09:00",
    "plannedEnd": "2026-08-24T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0068",
    "phase": "2단계 - 데이터이관",
    "system": "여신계",
    "work": "데이터이관",
    "item": "여신계 데이터이관",
    "task": "여신계 데이터이관 - 성능/부하 확인",
    "critical": false,
    "predecessor": [
      "MIG-0067"
    ],
    "successor": [
      "MIG-0069"
    ],
    "deliverable": "성능/부하 확인 결과서",
    "owner": "배수아",
    "subOwner": "남도현",
    "ownerEmail": "sabae@company.com",
    "plannedStart": "2026-08-25T09:00",
    "plannedEnd": "2026-08-25T18:00",
    "actualStart": "2026-08-25T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0069",
    "phase": "2단계 - 데이터이관",
    "system": "여신계",
    "work": "데이터이관",
    "item": "여신계 데이터이관",
    "task": "여신계 데이터이관 - 최종 리허설",
    "critical": false,
    "predecessor": [
      "MIG-0068"
    ],
    "successor": [
      "MIG-0070"
    ],
    "deliverable": "최종 리허설 결과서",
    "owner": "배수아",
    "subOwner": "남도현",
    "ownerEmail": "sabae@company.com",
    "plannedStart": "2026-08-26T09:00",
    "plannedEnd": "2026-08-26T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0070",
    "phase": "2단계 - 데이터이관",
    "system": "여신계",
    "work": "데이터이관",
    "item": "여신계 데이터이관",
    "task": "여신계 데이터이관 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0069"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "배수아",
    "subOwner": "남도현",
    "ownerEmail": "sabae@company.com",
    "plannedStart": "2026-08-27T09:00",
    "plannedEnd": "2026-08-27T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0071",
    "phase": "3단계 - 정합성검증",
    "system": "여신계",
    "work": "정합성검증",
    "item": "여신계 정합성검증",
    "task": "여신계 정합성검증 - 착수 및 요건 확인",
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
    "phase": "3단계 - 정합성검증",
    "system": "여신계",
    "work": "정합성검증",
    "item": "여신계 정합성검증",
    "task": "여신계 정합성검증 - 상세 설계",
    "critical": false,
    "predecessor": [
      "MIG-0071"
    ],
    "successor": [
      "MIG-0073"
    ],
    "deliverable": "상세 설계 결과서",
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
    "phase": "3단계 - 정합성검증",
    "system": "여신계",
    "work": "정합성검증",
    "item": "여신계 정합성검증",
    "task": "여신계 정합성검증 - 개발/구성 착수",
    "critical": false,
    "predecessor": [
      "MIG-0072"
    ],
    "successor": [
      "MIG-0074"
    ],
    "deliverable": "개발/구성 착수 결과서",
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
    "id": "MIG-0074",
    "phase": "3단계 - 정합성검증",
    "system": "여신계",
    "work": "정합성검증",
    "item": "여신계 정합성검증",
    "task": "여신계 정합성검증 - 1차 구현 완료",
    "critical": false,
    "predecessor": [
      "MIG-0073"
    ],
    "successor": [
      "MIG-0075"
    ],
    "deliverable": "1차 구현 완료 결과서",
    "owner": "남도현",
    "subOwner": "홍유진",
    "ownerEmail": "dhnam@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": "2026-08-21T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0075",
    "phase": "3단계 - 정합성검증",
    "system": "여신계",
    "work": "정합성검증",
    "item": "여신계 정합성검증",
    "task": "여신계 정합성검증 - 1차 검토",
    "critical": false,
    "predecessor": [
      "MIG-0074"
    ],
    "successor": [
      "MIG-0076"
    ],
    "deliverable": "1차 검토 결과서",
    "owner": "남도현",
    "subOwner": "홍유진",
    "ownerEmail": "dhnam@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0076",
    "phase": "3단계 - 정합성검증",
    "system": "여신계",
    "work": "정합성검증",
    "item": "여신계 정합성검증",
    "task": "여신계 정합성검증 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0075"
    ],
    "successor": [
      "MIG-0077"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "홍유진",
    "subOwner": "권태윤",
    "ownerEmail": "yjhong@company.com",
    "plannedStart": "2026-08-23T09:00",
    "plannedEnd": "2026-08-23T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0077",
    "phase": "3단계 - 정합성검증",
    "system": "여신계",
    "work": "정합성검증",
    "item": "여신계 정합성검증",
    "task": "여신계 정합성검증 - 2차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0076"
    ],
    "successor": [
      "MIG-0078"
    ],
    "deliverable": "2차 검증 결과서",
    "owner": "홍유진",
    "subOwner": "권태윤",
    "ownerEmail": "yjhong@company.com",
    "plannedStart": "2026-08-24T09:00",
    "plannedEnd": "2026-08-24T18:00",
    "actualStart": "2026-08-24T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0078",
    "phase": "3단계 - 정합성검증",
    "system": "여신계",
    "work": "정합성검증",
    "item": "여신계 정합성검증",
    "task": "여신계 정합성검증 - 성능/부하 확인",
    "critical": false,
    "predecessor": [
      "MIG-0077"
    ],
    "successor": [
      "MIG-0079"
    ],
    "deliverable": "성능/부하 확인 결과서",
    "owner": "홍유진",
    "subOwner": "권태윤",
    "ownerEmail": "yjhong@company.com",
    "plannedStart": "2026-08-25T09:00",
    "plannedEnd": "2026-08-25T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0079",
    "phase": "3단계 - 정합성검증",
    "system": "여신계",
    "work": "정합성검증",
    "item": "여신계 정합성검증",
    "task": "여신계 정합성검증 - 최종 리허설",
    "critical": false,
    "predecessor": [
      "MIG-0078"
    ],
    "successor": [
      "MIG-0080"
    ],
    "deliverable": "최종 리허설 결과서",
    "owner": "홍유진",
    "subOwner": "권태윤",
    "ownerEmail": "yjhong@company.com",
    "plannedStart": "2026-08-26T09:00",
    "plannedEnd": "2026-08-26T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0080",
    "phase": "3단계 - 정합성검증",
    "system": "여신계",
    "work": "정합성검증",
    "item": "여신계 정합성검증",
    "task": "여신계 정합성검증 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0079"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "홍유진",
    "subOwner": "권태윤",
    "ownerEmail": "yjhong@company.com",
    "plannedStart": "2026-08-27T09:00",
    "plannedEnd": "2026-08-27T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0081",
    "phase": "4단계 - 통합테스트",
    "system": "여신계",
    "work": "통합테스트",
    "item": "여신계 통합테스트",
    "task": "여신계 통합테스트 - 착수 및 요건 확인",
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
    "phase": "4단계 - 통합테스트",
    "system": "여신계",
    "work": "통합테스트",
    "item": "여신계 통합테스트",
    "task": "여신계 통합테스트 - 상세 설계",
    "critical": false,
    "predecessor": [
      "MIG-0081"
    ],
    "successor": [
      "MIG-0083"
    ],
    "deliverable": "상세 설계 결과서",
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
    "phase": "4단계 - 통합테스트",
    "system": "여신계",
    "work": "통합테스트",
    "item": "여신계 통합테스트",
    "task": "여신계 통합테스트 - 개발/구성 착수",
    "critical": false,
    "predecessor": [
      "MIG-0082"
    ],
    "successor": [
      "MIG-0084"
    ],
    "deliverable": "개발/구성 착수 결과서",
    "owner": "권태윤",
    "subOwner": "노하람",
    "ownerEmail": "tykwon@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": "2026-08-20T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0084",
    "phase": "4단계 - 통합테스트",
    "system": "여신계",
    "work": "통합테스트",
    "item": "여신계 통합테스트",
    "task": "여신계 통합테스트 - 1차 구현 완료",
    "critical": false,
    "predecessor": [
      "MIG-0083"
    ],
    "successor": [
      "MIG-0085"
    ],
    "deliverable": "1차 구현 완료 결과서",
    "owner": "권태윤",
    "subOwner": "노하람",
    "ownerEmail": "tykwon@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": "2026-08-21T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0085",
    "phase": "4단계 - 통합테스트",
    "system": "여신계",
    "work": "통합테스트",
    "item": "여신계 통합테스트",
    "task": "여신계 통합테스트 - 1차 검토",
    "critical": false,
    "predecessor": [
      "MIG-0084"
    ],
    "successor": [
      "MIG-0086"
    ],
    "deliverable": "1차 검토 결과서",
    "owner": "권태윤",
    "subOwner": "노하람",
    "ownerEmail": "tykwon@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0086",
    "phase": "4단계 - 통합테스트",
    "system": "여신계",
    "work": "통합테스트",
    "item": "여신계 통합테스트",
    "task": "여신계 통합테스트 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0085"
    ],
    "successor": [
      "MIG-0087"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "노하람",
    "subOwner": "백승우",
    "ownerEmail": "hrno@company.com",
    "plannedStart": "2026-08-23T09:00",
    "plannedEnd": "2026-08-23T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0087",
    "phase": "4단계 - 통합테스트",
    "system": "여신계",
    "work": "통합테스트",
    "item": "여신계 통합테스트",
    "task": "여신계 통합테스트 - 2차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0086"
    ],
    "successor": [
      "MIG-0088"
    ],
    "deliverable": "2차 검증 결과서",
    "owner": "노하람",
    "subOwner": "백승우",
    "ownerEmail": "hrno@company.com",
    "plannedStart": "2026-08-24T09:00",
    "plannedEnd": "2026-08-24T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0088",
    "phase": "4단계 - 통합테스트",
    "system": "여신계",
    "work": "통합테스트",
    "item": "여신계 통합테스트",
    "task": "여신계 통합테스트 - 성능/부하 확인",
    "critical": false,
    "predecessor": [
      "MIG-0087"
    ],
    "successor": [
      "MIG-0089"
    ],
    "deliverable": "성능/부하 확인 결과서",
    "owner": "노하람",
    "subOwner": "백승우",
    "ownerEmail": "hrno@company.com",
    "plannedStart": "2026-08-25T09:00",
    "plannedEnd": "2026-08-25T18:00",
    "actualStart": "2026-08-25T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0089",
    "phase": "4단계 - 통합테스트",
    "system": "여신계",
    "work": "통합테스트",
    "item": "여신계 통합테스트",
    "task": "여신계 통합테스트 - 최종 리허설",
    "critical": false,
    "predecessor": [
      "MIG-0088"
    ],
    "successor": [
      "MIG-0090"
    ],
    "deliverable": "최종 리허설 결과서",
    "owner": "노하람",
    "subOwner": "백승우",
    "ownerEmail": "hrno@company.com",
    "plannedStart": "2026-08-26T09:00",
    "plannedEnd": "2026-08-26T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0090",
    "phase": "4단계 - 통합테스트",
    "system": "여신계",
    "work": "통합테스트",
    "item": "여신계 통합테스트",
    "task": "여신계 통합테스트 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0089"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "노하람",
    "subOwner": "백승우",
    "ownerEmail": "hrno@company.com",
    "plannedStart": "2026-08-27T09:00",
    "plannedEnd": "2026-08-27T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0091",
    "phase": "5단계 - 전환리허설",
    "system": "여신계",
    "work": "전환리허설",
    "item": "여신계 전환리허설",
    "task": "여신계 전환리허설 - 착수 및 요건 확인",
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
    "phase": "5단계 - 전환리허설",
    "system": "여신계",
    "work": "전환리허설",
    "item": "여신계 전환리허설",
    "task": "여신계 전환리허설 - 상세 설계",
    "critical": false,
    "predecessor": [
      "MIG-0091"
    ],
    "successor": [
      "MIG-0093"
    ],
    "deliverable": "상세 설계 결과서",
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
    "phase": "5단계 - 전환리허설",
    "system": "여신계",
    "work": "전환리허설",
    "item": "여신계 전환리허설",
    "task": "여신계 전환리허설 - 개발/구성 착수",
    "critical": false,
    "predecessor": [
      "MIG-0092"
    ],
    "successor": [
      "MIG-0094"
    ],
    "deliverable": "개발/구성 착수 결과서",
    "owner": "백승우",
    "subOwner": "유채원",
    "ownerEmail": "swbaek@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": "2026-08-20T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0094",
    "phase": "5단계 - 전환리허설",
    "system": "여신계",
    "work": "전환리허설",
    "item": "여신계 전환리허설",
    "task": "여신계 전환리허설 - 1차 구현 완료",
    "critical": false,
    "predecessor": [
      "MIG-0093"
    ],
    "successor": [
      "MIG-0095"
    ],
    "deliverable": "1차 구현 완료 결과서",
    "owner": "백승우",
    "subOwner": "유채원",
    "ownerEmail": "swbaek@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": "2026-08-21T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0095",
    "phase": "5단계 - 전환리허설",
    "system": "여신계",
    "work": "전환리허설",
    "item": "여신계 전환리허설",
    "task": "여신계 전환리허설 - 1차 검토",
    "critical": false,
    "predecessor": [
      "MIG-0094"
    ],
    "successor": [
      "MIG-0096"
    ],
    "deliverable": "1차 검토 결과서",
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
    "id": "MIG-0096",
    "phase": "5단계 - 전환리허설",
    "system": "여신계",
    "work": "전환리허설",
    "item": "여신계 전환리허설",
    "task": "여신계 전환리허설 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0095"
    ],
    "successor": [
      "MIG-0097"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "유채원",
    "subOwner": "김도윤",
    "ownerEmail": "cwyu@company.com",
    "plannedStart": "2026-08-23T09:00",
    "plannedEnd": "2026-08-23T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0097",
    "phase": "5단계 - 전환리허설",
    "system": "여신계",
    "work": "전환리허설",
    "item": "여신계 전환리허설",
    "task": "여신계 전환리허설 - 2차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0096"
    ],
    "successor": [
      "MIG-0098"
    ],
    "deliverable": "2차 검증 결과서",
    "owner": "유채원",
    "subOwner": "김도윤",
    "ownerEmail": "cwyu@company.com",
    "plannedStart": "2026-08-24T09:00",
    "plannedEnd": "2026-08-24T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0098",
    "phase": "5단계 - 전환리허설",
    "system": "여신계",
    "work": "전환리허설",
    "item": "여신계 전환리허설",
    "task": "여신계 전환리허설 - 성능/부하 확인",
    "critical": false,
    "predecessor": [
      "MIG-0097"
    ],
    "successor": [
      "MIG-0099"
    ],
    "deliverable": "성능/부하 확인 결과서",
    "owner": "유채원",
    "subOwner": "김도윤",
    "ownerEmail": "cwyu@company.com",
    "plannedStart": "2026-08-25T09:00",
    "plannedEnd": "2026-08-25T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0099",
    "phase": "5단계 - 전환리허설",
    "system": "여신계",
    "work": "전환리허설",
    "item": "여신계 전환리허설",
    "task": "여신계 전환리허설 - 최종 리허설",
    "critical": false,
    "predecessor": [
      "MIG-0098"
    ],
    "successor": [
      "MIG-0100"
    ],
    "deliverable": "최종 리허설 결과서",
    "owner": "유채원",
    "subOwner": "김도윤",
    "ownerEmail": "cwyu@company.com",
    "plannedStart": "2026-08-26T09:00",
    "plannedEnd": "2026-08-26T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0100",
    "phase": "5단계 - 전환리허설",
    "system": "여신계",
    "work": "전환리허설",
    "item": "여신계 전환리허설",
    "task": "여신계 전환리허설 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0099"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "유채원",
    "subOwner": "김도윤",
    "ownerEmail": "cwyu@company.com",
    "plannedStart": "2026-08-27T09:00",
    "plannedEnd": "2026-08-27T18:00",
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
