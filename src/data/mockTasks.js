// 확정된 데이터 모델: Task ID, 5단계 분류(단계/시스템/업무/항목/작업),
// Critical Path, 선후행 Task ID(후행은 자동 계산), 산출물, 담당자, 계획/실적 일시
// 시나리오: 담당자 10명 x 프로젝트 10일 x 6개 시스템 x 5개 업무영역(체인) = 300개 작업

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
    "owner": "이서연",
    "subOwner": "박민재",
    "ownerEmail": "sylee@company.com",
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
    "owner": "이서연",
    "subOwner": "박민재",
    "ownerEmail": "sylee@company.com",
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
    "owner": "박민재",
    "subOwner": "최지훈",
    "ownerEmail": "mjpark@company.com",
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
    "owner": "박민재",
    "subOwner": "최지훈",
    "ownerEmail": "mjpark@company.com",
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
    "owner": "박민재",
    "subOwner": "최지훈",
    "ownerEmail": "mjpark@company.com",
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
    "owner": "최지훈",
    "subOwner": "정하은",
    "ownerEmail": "jhchoi@company.com",
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
    "owner": "이서연",
    "subOwner": "박민재",
    "ownerEmail": "sylee@company.com",
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
    "owner": "박민재",
    "subOwner": "최지훈",
    "ownerEmail": "mjpark@company.com",
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
    "owner": "정하은",
    "subOwner": "강서준",
    "ownerEmail": "hejung@company.com",
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
    "owner": "정하은",
    "subOwner": "강서준",
    "ownerEmail": "hejung@company.com",
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
    "owner": "정하은",
    "subOwner": "강서준",
    "ownerEmail": "hejung@company.com",
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
    "owner": "정하은",
    "subOwner": "강서준",
    "ownerEmail": "hejung@company.com",
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
    "owner": "최지훈",
    "subOwner": "정하은",
    "ownerEmail": "jhchoi@company.com",
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
    "owner": "정하은",
    "subOwner": "강서준",
    "ownerEmail": "hejung@company.com",
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
    "owner": "정하은",
    "subOwner": "강서준",
    "ownerEmail": "hejung@company.com",
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
    "owner": "정하은",
    "subOwner": "강서준",
    "ownerEmail": "hejung@company.com",
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
    "owner": "강서준",
    "subOwner": "윤지우",
    "ownerEmail": "sjkang@company.com",
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
    "owner": "윤지우",
    "subOwner": "임하윤",
    "ownerEmail": "jwyoon@company.com",
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
    "owner": "강서준",
    "subOwner": "윤지우",
    "ownerEmail": "sjkang@company.com",
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
    "owner": "강서준",
    "subOwner": "윤지우",
    "ownerEmail": "sjkang@company.com",
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
    "owner": "윤지우",
    "subOwner": "임하윤",
    "ownerEmail": "jwyoon@company.com",
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
    "owner": "윤지우",
    "subOwner": "임하윤",
    "ownerEmail": "jwyoon@company.com",
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
    "owner": "윤지우",
    "subOwner": "임하윤",
    "ownerEmail": "jwyoon@company.com",
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
    "owner": "윤지우",
    "subOwner": "임하윤",
    "ownerEmail": "jwyoon@company.com",
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
    "owner": "윤지우",
    "subOwner": "임하윤",
    "ownerEmail": "jwyoon@company.com",
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
    "owner": "임하윤",
    "subOwner": "한소율",
    "ownerEmail": "hylim@company.com",
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
    "owner": "임하윤",
    "subOwner": "한소율",
    "ownerEmail": "hylim@company.com",
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
    "owner": "한소율",
    "subOwner": "오예준",
    "ownerEmail": "syhan@company.com",
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
    "owner": "임하윤",
    "subOwner": "한소율",
    "ownerEmail": "hylim@company.com",
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
    "owner": "임하윤",
    "subOwner": "한소율",
    "ownerEmail": "hylim@company.com",
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
    "owner": "한소율",
    "subOwner": "오예준",
    "ownerEmail": "syhan@company.com",
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
    "owner": "한소율",
    "subOwner": "오예준",
    "ownerEmail": "syhan@company.com",
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
    "owner": "한소율",
    "subOwner": "오예준",
    "ownerEmail": "syhan@company.com",
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
    "owner": "오예준",
    "subOwner": "김도윤",
    "ownerEmail": "yjoh@company.com",
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
    "owner": "임하윤",
    "subOwner": "한소율",
    "ownerEmail": "hylim@company.com",
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
    "owner": "한소율",
    "subOwner": "오예준",
    "ownerEmail": "syhan@company.com",
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
    "owner": "한소율",
    "subOwner": "오예준",
    "ownerEmail": "syhan@company.com",
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
    "owner": "오예준",
    "subOwner": "김도윤",
    "ownerEmail": "yjoh@company.com",
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
    "owner": "오예준",
    "subOwner": "김도윤",
    "ownerEmail": "yjoh@company.com",
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
    "owner": "오예준",
    "subOwner": "김도윤",
    "ownerEmail": "yjoh@company.com",
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
    "owner": "김도윤",
    "subOwner": "이서연",
    "ownerEmail": "dykim@company.com",
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
    "owner": "오예준",
    "subOwner": "김도윤",
    "ownerEmail": "yjoh@company.com",
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
    "owner": "오예준",
    "subOwner": "김도윤",
    "ownerEmail": "yjoh@company.com",
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
    "owner": "오예준",
    "subOwner": "김도윤",
    "ownerEmail": "yjoh@company.com",
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
    "owner": "김도윤",
    "subOwner": "이서연",
    "ownerEmail": "dykim@company.com",
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
    "owner": "김도윤",
    "subOwner": "이서연",
    "ownerEmail": "dykim@company.com",
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
    "owner": "김도윤",
    "subOwner": "이서연",
    "ownerEmail": "dykim@company.com",
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
    "owner": "이서연",
    "subOwner": "박민재",
    "ownerEmail": "sylee@company.com",
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
    "owner": "오예준",
    "subOwner": "김도윤",
    "ownerEmail": "yjoh@company.com",
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
    "owner": "오예준",
    "subOwner": "김도윤",
    "ownerEmail": "yjoh@company.com",
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
    "owner": "오예준",
    "subOwner": "김도윤",
    "ownerEmail": "yjoh@company.com",
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
    "owner": "김도윤",
    "subOwner": "이서연",
    "ownerEmail": "dykim@company.com",
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
    "owner": "이서연",
    "subOwner": "박민재",
    "ownerEmail": "sylee@company.com",
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
    "owner": "이서연",
    "subOwner": "박민재",
    "ownerEmail": "sylee@company.com",
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
    "owner": "박민재",
    "subOwner": "최지훈",
    "ownerEmail": "mjpark@company.com",
    "plannedStart": "2026-08-27T09:00",
    "plannedEnd": "2026-08-27T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0101",
    "phase": "1단계 - 사전준비",
    "system": "수신계",
    "work": "환경구축",
    "item": "수신계 환경구축",
    "task": "수신계 환경구축 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0102"
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
    "id": "MIG-0102",
    "phase": "1단계 - 사전준비",
    "system": "수신계",
    "work": "환경구축",
    "item": "수신계 환경구축",
    "task": "수신계 환경구축 - 상세 설계",
    "critical": false,
    "predecessor": [
      "MIG-0101"
    ],
    "successor": [
      "MIG-0103"
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
    "id": "MIG-0103",
    "phase": "1단계 - 사전준비",
    "system": "수신계",
    "work": "환경구축",
    "item": "수신계 환경구축",
    "task": "수신계 환경구축 - 개발/구성 착수",
    "critical": false,
    "predecessor": [
      "MIG-0102"
    ],
    "successor": [
      "MIG-0104"
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
    "id": "MIG-0104",
    "phase": "1단계 - 사전준비",
    "system": "수신계",
    "work": "환경구축",
    "item": "수신계 환경구축",
    "task": "수신계 환경구축 - 1차 구현 완료",
    "critical": false,
    "predecessor": [
      "MIG-0103"
    ],
    "successor": [
      "MIG-0105"
    ],
    "deliverable": "1차 구현 완료 결과서",
    "owner": "이서연",
    "subOwner": "박민재",
    "ownerEmail": "sylee@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": "2026-08-21T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0105",
    "phase": "1단계 - 사전준비",
    "system": "수신계",
    "work": "환경구축",
    "item": "수신계 환경구축",
    "task": "수신계 환경구축 - 1차 검토",
    "critical": false,
    "predecessor": [
      "MIG-0104"
    ],
    "successor": [
      "MIG-0106"
    ],
    "deliverable": "1차 검토 결과서",
    "owner": "이서연",
    "subOwner": "박민재",
    "ownerEmail": "sylee@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0106",
    "phase": "1단계 - 사전준비",
    "system": "수신계",
    "work": "환경구축",
    "item": "수신계 환경구축",
    "task": "수신계 환경구축 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0105"
    ],
    "successor": [
      "MIG-0107"
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
    "id": "MIG-0107",
    "phase": "1단계 - 사전준비",
    "system": "수신계",
    "work": "환경구축",
    "item": "수신계 환경구축",
    "task": "수신계 환경구축 - 2차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0106"
    ],
    "successor": [
      "MIG-0108"
    ],
    "deliverable": "2차 검증 결과서",
    "owner": "박민재",
    "subOwner": "최지훈",
    "ownerEmail": "mjpark@company.com",
    "plannedStart": "2026-08-24T09:00",
    "plannedEnd": "2026-08-24T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0108",
    "phase": "1단계 - 사전준비",
    "system": "수신계",
    "work": "환경구축",
    "item": "수신계 환경구축",
    "task": "수신계 환경구축 - 성능/부하 확인",
    "critical": false,
    "predecessor": [
      "MIG-0107"
    ],
    "successor": [
      "MIG-0109"
    ],
    "deliverable": "성능/부하 확인 결과서",
    "owner": "박민재",
    "subOwner": "최지훈",
    "ownerEmail": "mjpark@company.com",
    "plannedStart": "2026-08-25T09:00",
    "plannedEnd": "2026-08-25T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0109",
    "phase": "1단계 - 사전준비",
    "system": "수신계",
    "work": "환경구축",
    "item": "수신계 환경구축",
    "task": "수신계 환경구축 - 최종 리허설",
    "critical": false,
    "predecessor": [
      "MIG-0108"
    ],
    "successor": [
      "MIG-0110"
    ],
    "deliverable": "최종 리허설 결과서",
    "owner": "박민재",
    "subOwner": "최지훈",
    "ownerEmail": "mjpark@company.com",
    "plannedStart": "2026-08-26T09:00",
    "plannedEnd": "2026-08-26T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0110",
    "phase": "1단계 - 사전준비",
    "system": "수신계",
    "work": "환경구축",
    "item": "수신계 환경구축",
    "task": "수신계 환경구축 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0109"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "최지훈",
    "subOwner": "정하은",
    "ownerEmail": "jhchoi@company.com",
    "plannedStart": "2026-08-27T09:00",
    "plannedEnd": "2026-08-27T18:00",
    "actualStart": "2026-08-27T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0111",
    "phase": "2단계 - 데이터이관",
    "system": "수신계",
    "work": "데이터이관",
    "item": "수신계 데이터이관",
    "task": "수신계 데이터이관 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0112"
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
    "id": "MIG-0112",
    "phase": "2단계 - 데이터이관",
    "system": "수신계",
    "work": "데이터이관",
    "item": "수신계 데이터이관",
    "task": "수신계 데이터이관 - 상세 설계",
    "critical": false,
    "predecessor": [
      "MIG-0111"
    ],
    "successor": [
      "MIG-0113"
    ],
    "deliverable": "상세 설계 결과서",
    "owner": "이서연",
    "subOwner": "박민재",
    "ownerEmail": "sylee@company.com",
    "plannedStart": "2026-08-19T09:00",
    "plannedEnd": "2026-08-19T18:00",
    "actualStart": "2026-08-19T09:00",
    "actualEnd": "2026-08-19T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0113",
    "phase": "2단계 - 데이터이관",
    "system": "수신계",
    "work": "데이터이관",
    "item": "수신계 데이터이관",
    "task": "수신계 데이터이관 - 개발/구성 착수",
    "critical": false,
    "predecessor": [
      "MIG-0112"
    ],
    "successor": [
      "MIG-0114"
    ],
    "deliverable": "개발/구성 착수 결과서",
    "owner": "이서연",
    "subOwner": "박민재",
    "ownerEmail": "sylee@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": "2026-08-20T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0114",
    "phase": "2단계 - 데이터이관",
    "system": "수신계",
    "work": "데이터이관",
    "item": "수신계 데이터이관",
    "task": "수신계 데이터이관 - 1차 구현 완료",
    "critical": false,
    "predecessor": [
      "MIG-0113"
    ],
    "successor": [
      "MIG-0115"
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
    "id": "MIG-0115",
    "phase": "2단계 - 데이터이관",
    "system": "수신계",
    "work": "데이터이관",
    "item": "수신계 데이터이관",
    "task": "수신계 데이터이관 - 1차 검토",
    "critical": false,
    "predecessor": [
      "MIG-0114"
    ],
    "successor": [
      "MIG-0116"
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
    "id": "MIG-0116",
    "phase": "2단계 - 데이터이관",
    "system": "수신계",
    "work": "데이터이관",
    "item": "수신계 데이터이관",
    "task": "수신계 데이터이관 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0115"
    ],
    "successor": [
      "MIG-0117"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "박민재",
    "subOwner": "최지훈",
    "ownerEmail": "mjpark@company.com",
    "plannedStart": "2026-08-23T09:00",
    "plannedEnd": "2026-08-23T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0117",
    "phase": "2단계 - 데이터이관",
    "system": "수신계",
    "work": "데이터이관",
    "item": "수신계 데이터이관",
    "task": "수신계 데이터이관 - 2차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0116"
    ],
    "successor": [
      "MIG-0118"
    ],
    "deliverable": "2차 검증 결과서",
    "owner": "최지훈",
    "subOwner": "정하은",
    "ownerEmail": "jhchoi@company.com",
    "plannedStart": "2026-08-24T09:00",
    "plannedEnd": "2026-08-24T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0118",
    "phase": "2단계 - 데이터이관",
    "system": "수신계",
    "work": "데이터이관",
    "item": "수신계 데이터이관",
    "task": "수신계 데이터이관 - 성능/부하 확인",
    "critical": false,
    "predecessor": [
      "MIG-0117"
    ],
    "successor": [
      "MIG-0119"
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
    "id": "MIG-0119",
    "phase": "2단계 - 데이터이관",
    "system": "수신계",
    "work": "데이터이관",
    "item": "수신계 데이터이관",
    "task": "수신계 데이터이관 - 최종 리허설",
    "critical": false,
    "predecessor": [
      "MIG-0118"
    ],
    "successor": [
      "MIG-0120"
    ],
    "deliverable": "최종 리허설 결과서",
    "owner": "최지훈",
    "subOwner": "정하은",
    "ownerEmail": "jhchoi@company.com",
    "plannedStart": "2026-08-26T09:00",
    "plannedEnd": "2026-08-26T18:00",
    "actualStart": "2026-08-26T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0120",
    "phase": "2단계 - 데이터이관",
    "system": "수신계",
    "work": "데이터이관",
    "item": "수신계 데이터이관",
    "task": "수신계 데이터이관 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0119"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "정하은",
    "subOwner": "강서준",
    "ownerEmail": "hejung@company.com",
    "plannedStart": "2026-08-27T09:00",
    "plannedEnd": "2026-08-27T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0121",
    "phase": "3단계 - 정합성검증",
    "system": "수신계",
    "work": "정합성검증",
    "item": "수신계 정합성검증",
    "task": "수신계 정합성검증 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0122"
    ],
    "deliverable": "착수 및 요건 확인 결과서",
    "owner": "박민재",
    "subOwner": "최지훈",
    "ownerEmail": "mjpark@company.com",
    "plannedStart": "2026-08-18T09:00",
    "plannedEnd": "2026-08-18T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0122",
    "phase": "3단계 - 정합성검증",
    "system": "수신계",
    "work": "정합성검증",
    "item": "수신계 정합성검증",
    "task": "수신계 정합성검증 - 상세 설계",
    "critical": false,
    "predecessor": [
      "MIG-0121"
    ],
    "successor": [
      "MIG-0123"
    ],
    "deliverable": "상세 설계 결과서",
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
    "id": "MIG-0123",
    "phase": "3단계 - 정합성검증",
    "system": "수신계",
    "work": "정합성검증",
    "item": "수신계 정합성검증",
    "task": "수신계 정합성검증 - 개발/구성 착수",
    "critical": false,
    "predecessor": [
      "MIG-0122"
    ],
    "successor": [
      "MIG-0124"
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
    "id": "MIG-0124",
    "phase": "3단계 - 정합성검증",
    "system": "수신계",
    "work": "정합성검증",
    "item": "수신계 정합성검증",
    "task": "수신계 정합성검증 - 1차 구현 완료",
    "critical": false,
    "predecessor": [
      "MIG-0123"
    ],
    "successor": [
      "MIG-0125"
    ],
    "deliverable": "1차 구현 완료 결과서",
    "owner": "최지훈",
    "subOwner": "정하은",
    "ownerEmail": "jhchoi@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": "2026-08-21T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0125",
    "phase": "3단계 - 정합성검증",
    "system": "수신계",
    "work": "정합성검증",
    "item": "수신계 정합성검증",
    "task": "수신계 정합성검증 - 1차 검토",
    "critical": false,
    "predecessor": [
      "MIG-0124"
    ],
    "successor": [
      "MIG-0126"
    ],
    "deliverable": "1차 검토 결과서",
    "owner": "최지훈",
    "subOwner": "정하은",
    "ownerEmail": "jhchoi@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": "2026-08-22T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0126",
    "phase": "3단계 - 정합성검증",
    "system": "수신계",
    "work": "정합성검증",
    "item": "수신계 정합성검증",
    "task": "수신계 정합성검증 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0125"
    ],
    "successor": [
      "MIG-0127"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "최지훈",
    "subOwner": "정하은",
    "ownerEmail": "jhchoi@company.com",
    "plannedStart": "2026-08-23T09:00",
    "plannedEnd": "2026-08-23T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0127",
    "phase": "3단계 - 정합성검증",
    "system": "수신계",
    "work": "정합성검증",
    "item": "수신계 정합성검증",
    "task": "수신계 정합성검증 - 2차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0126"
    ],
    "successor": [
      "MIG-0128"
    ],
    "deliverable": "2차 검증 결과서",
    "owner": "정하은",
    "subOwner": "강서준",
    "ownerEmail": "hejung@company.com",
    "plannedStart": "2026-08-24T09:00",
    "plannedEnd": "2026-08-24T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0128",
    "phase": "3단계 - 정합성검증",
    "system": "수신계",
    "work": "정합성검증",
    "item": "수신계 정합성검증",
    "task": "수신계 정합성검증 - 성능/부하 확인",
    "critical": false,
    "predecessor": [
      "MIG-0127"
    ],
    "successor": [
      "MIG-0129"
    ],
    "deliverable": "성능/부하 확인 결과서",
    "owner": "정하은",
    "subOwner": "강서준",
    "ownerEmail": "hejung@company.com",
    "plannedStart": "2026-08-25T09:00",
    "plannedEnd": "2026-08-25T18:00",
    "actualStart": "2026-08-25T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0129",
    "phase": "3단계 - 정합성검증",
    "system": "수신계",
    "work": "정합성검증",
    "item": "수신계 정합성검증",
    "task": "수신계 정합성검증 - 최종 리허설",
    "critical": false,
    "predecessor": [
      "MIG-0128"
    ],
    "successor": [
      "MIG-0130"
    ],
    "deliverable": "최종 리허설 결과서",
    "owner": "정하은",
    "subOwner": "강서준",
    "ownerEmail": "hejung@company.com",
    "plannedStart": "2026-08-26T09:00",
    "plannedEnd": "2026-08-26T18:00",
    "actualStart": "2026-08-26T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0130",
    "phase": "3단계 - 정합성검증",
    "system": "수신계",
    "work": "정합성검증",
    "item": "수신계 정합성검증",
    "task": "수신계 정합성검증 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0129"
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
    "status": "예정"
  },
  {
    "id": "MIG-0131",
    "phase": "4단계 - 통합테스트",
    "system": "수신계",
    "work": "통합테스트",
    "item": "수신계 통합테스트",
    "task": "수신계 통합테스트 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0132"
    ],
    "deliverable": "착수 및 요건 확인 결과서",
    "owner": "최지훈",
    "subOwner": "정하은",
    "ownerEmail": "jhchoi@company.com",
    "plannedStart": "2026-08-18T09:00",
    "plannedEnd": "2026-08-18T18:00",
    "actualStart": "2026-08-18T09:00",
    "actualEnd": "2026-08-18T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0132",
    "phase": "4단계 - 통합테스트",
    "system": "수신계",
    "work": "통합테스트",
    "item": "수신계 통합테스트",
    "task": "수신계 통합테스트 - 상세 설계",
    "critical": false,
    "predecessor": [
      "MIG-0131"
    ],
    "successor": [
      "MIG-0133"
    ],
    "deliverable": "상세 설계 결과서",
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
    "id": "MIG-0133",
    "phase": "4단계 - 통합테스트",
    "system": "수신계",
    "work": "통합테스트",
    "item": "수신계 통합테스트",
    "task": "수신계 통합테스트 - 개발/구성 착수",
    "critical": false,
    "predecessor": [
      "MIG-0132"
    ],
    "successor": [
      "MIG-0134"
    ],
    "deliverable": "개발/구성 착수 결과서",
    "owner": "최지훈",
    "subOwner": "정하은",
    "ownerEmail": "jhchoi@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": "2026-08-20T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0134",
    "phase": "4단계 - 통합테스트",
    "system": "수신계",
    "work": "통합테스트",
    "item": "수신계 통합테스트",
    "task": "수신계 통합테스트 - 1차 구현 완료",
    "critical": false,
    "predecessor": [
      "MIG-0133"
    ],
    "successor": [
      "MIG-0135"
    ],
    "deliverable": "1차 구현 완료 결과서",
    "owner": "정하은",
    "subOwner": "강서준",
    "ownerEmail": "hejung@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": "2026-08-21T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0135",
    "phase": "4단계 - 통합테스트",
    "system": "수신계",
    "work": "통합테스트",
    "item": "수신계 통합테스트",
    "task": "수신계 통합테스트 - 1차 검토",
    "critical": false,
    "predecessor": [
      "MIG-0134"
    ],
    "successor": [
      "MIG-0136"
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
    "id": "MIG-0136",
    "phase": "4단계 - 통합테스트",
    "system": "수신계",
    "work": "통합테스트",
    "item": "수신계 통합테스트",
    "task": "수신계 통합테스트 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0135"
    ],
    "successor": [
      "MIG-0137"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "정하은",
    "subOwner": "강서준",
    "ownerEmail": "hejung@company.com",
    "plannedStart": "2026-08-23T09:00",
    "plannedEnd": "2026-08-23T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0137",
    "phase": "4단계 - 통합테스트",
    "system": "수신계",
    "work": "통합테스트",
    "item": "수신계 통합테스트",
    "task": "수신계 통합테스트 - 2차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0136"
    ],
    "successor": [
      "MIG-0138"
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
    "id": "MIG-0138",
    "phase": "4단계 - 통합테스트",
    "system": "수신계",
    "work": "통합테스트",
    "item": "수신계 통합테스트",
    "task": "수신계 통합테스트 - 성능/부하 확인",
    "critical": false,
    "predecessor": [
      "MIG-0137"
    ],
    "successor": [
      "MIG-0139"
    ],
    "deliverable": "성능/부하 확인 결과서",
    "owner": "강서준",
    "subOwner": "윤지우",
    "ownerEmail": "sjkang@company.com",
    "plannedStart": "2026-08-25T09:00",
    "plannedEnd": "2026-08-25T18:00",
    "actualStart": "2026-08-25T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0139",
    "phase": "4단계 - 통합테스트",
    "system": "수신계",
    "work": "통합테스트",
    "item": "수신계 통합테스트",
    "task": "수신계 통합테스트 - 최종 리허설",
    "critical": false,
    "predecessor": [
      "MIG-0138"
    ],
    "successor": [
      "MIG-0140"
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
    "id": "MIG-0140",
    "phase": "4단계 - 통합테스트",
    "system": "수신계",
    "work": "통합테스트",
    "item": "수신계 통합테스트",
    "task": "수신계 통합테스트 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0139"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "윤지우",
    "subOwner": "임하윤",
    "ownerEmail": "jwyoon@company.com",
    "plannedStart": "2026-08-27T09:00",
    "plannedEnd": "2026-08-27T18:00",
    "actualStart": "2026-08-27T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0141",
    "phase": "5단계 - 전환리허설",
    "system": "수신계",
    "work": "전환리허설",
    "item": "수신계 전환리허설",
    "task": "수신계 전환리허설 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0142"
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
    "id": "MIG-0142",
    "phase": "5단계 - 전환리허설",
    "system": "수신계",
    "work": "전환리허설",
    "item": "수신계 전환리허설",
    "task": "수신계 전환리허설 - 상세 설계",
    "critical": false,
    "predecessor": [
      "MIG-0141"
    ],
    "successor": [
      "MIG-0143"
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
    "id": "MIG-0143",
    "phase": "5단계 - 전환리허설",
    "system": "수신계",
    "work": "전환리허설",
    "item": "수신계 전환리허설",
    "task": "수신계 전환리허설 - 개발/구성 착수",
    "critical": false,
    "predecessor": [
      "MIG-0142"
    ],
    "successor": [
      "MIG-0144"
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
    "id": "MIG-0144",
    "phase": "5단계 - 전환리허설",
    "system": "수신계",
    "work": "전환리허설",
    "item": "수신계 전환리허설",
    "task": "수신계 전환리허설 - 1차 구현 완료",
    "critical": false,
    "predecessor": [
      "MIG-0143"
    ],
    "successor": [
      "MIG-0145"
    ],
    "deliverable": "1차 구현 완료 결과서",
    "owner": "강서준",
    "subOwner": "윤지우",
    "ownerEmail": "sjkang@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0145",
    "phase": "5단계 - 전환리허설",
    "system": "수신계",
    "work": "전환리허설",
    "item": "수신계 전환리허설",
    "task": "수신계 전환리허설 - 1차 검토",
    "critical": false,
    "predecessor": [
      "MIG-0144"
    ],
    "successor": [
      "MIG-0146"
    ],
    "deliverable": "1차 검토 결과서",
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
    "id": "MIG-0146",
    "phase": "5단계 - 전환리허설",
    "system": "수신계",
    "work": "전환리허설",
    "item": "수신계 전환리허설",
    "task": "수신계 전환리허설 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0145"
    ],
    "successor": [
      "MIG-0147"
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
    "id": "MIG-0147",
    "phase": "5단계 - 전환리허설",
    "system": "수신계",
    "work": "전환리허설",
    "item": "수신계 전환리허설",
    "task": "수신계 전환리허설 - 2차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0146"
    ],
    "successor": [
      "MIG-0148"
    ],
    "deliverable": "2차 검증 결과서",
    "owner": "윤지우",
    "subOwner": "임하윤",
    "ownerEmail": "jwyoon@company.com",
    "plannedStart": "2026-08-24T09:00",
    "plannedEnd": "2026-08-24T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0148",
    "phase": "5단계 - 전환리허설",
    "system": "수신계",
    "work": "전환리허설",
    "item": "수신계 전환리허설",
    "task": "수신계 전환리허설 - 성능/부하 확인",
    "critical": false,
    "predecessor": [
      "MIG-0147"
    ],
    "successor": [
      "MIG-0149"
    ],
    "deliverable": "성능/부하 확인 결과서",
    "owner": "윤지우",
    "subOwner": "임하윤",
    "ownerEmail": "jwyoon@company.com",
    "plannedStart": "2026-08-25T09:00",
    "plannedEnd": "2026-08-25T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0149",
    "phase": "5단계 - 전환리허설",
    "system": "수신계",
    "work": "전환리허설",
    "item": "수신계 전환리허설",
    "task": "수신계 전환리허설 - 최종 리허설",
    "critical": false,
    "predecessor": [
      "MIG-0148"
    ],
    "successor": [
      "MIG-0150"
    ],
    "deliverable": "최종 리허설 결과서",
    "owner": "윤지우",
    "subOwner": "임하윤",
    "ownerEmail": "jwyoon@company.com",
    "plannedStart": "2026-08-26T09:00",
    "plannedEnd": "2026-08-26T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0150",
    "phase": "5단계 - 전환리허설",
    "system": "수신계",
    "work": "전환리허설",
    "item": "수신계 전환리허설",
    "task": "수신계 전환리허설 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0149"
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
    "id": "MIG-0151",
    "phase": "1단계 - 사전준비",
    "system": "외환계",
    "work": "환경구축",
    "item": "외환계 환경구축",
    "task": "외환계 환경구축 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0152"
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
    "id": "MIG-0152",
    "phase": "1단계 - 사전준비",
    "system": "외환계",
    "work": "환경구축",
    "item": "외환계 환경구축",
    "task": "외환계 환경구축 - 상세 설계",
    "critical": false,
    "predecessor": [
      "MIG-0151"
    ],
    "successor": [
      "MIG-0153"
    ],
    "deliverable": "상세 설계 결과서",
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
    "id": "MIG-0153",
    "phase": "1단계 - 사전준비",
    "system": "외환계",
    "work": "환경구축",
    "item": "외환계 환경구축",
    "task": "외환계 환경구축 - 개발/구성 착수",
    "critical": false,
    "predecessor": [
      "MIG-0152"
    ],
    "successor": [
      "MIG-0154"
    ],
    "deliverable": "개발/구성 착수 결과서",
    "owner": "강서준",
    "subOwner": "윤지우",
    "ownerEmail": "sjkang@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0154",
    "phase": "1단계 - 사전준비",
    "system": "외환계",
    "work": "환경구축",
    "item": "외환계 환경구축",
    "task": "외환계 환경구축 - 1차 구현 완료",
    "critical": false,
    "predecessor": [
      "MIG-0153"
    ],
    "successor": [
      "MIG-0155"
    ],
    "deliverable": "1차 구현 완료 결과서",
    "owner": "윤지우",
    "subOwner": "임하윤",
    "ownerEmail": "jwyoon@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": "2026-08-21T09:00",
    "actualEnd": "2026-08-21T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0155",
    "phase": "1단계 - 사전준비",
    "system": "외환계",
    "work": "환경구축",
    "item": "외환계 환경구축",
    "task": "외환계 환경구축 - 1차 검토",
    "critical": false,
    "predecessor": [
      "MIG-0154"
    ],
    "successor": [
      "MIG-0156"
    ],
    "deliverable": "1차 검토 결과서",
    "owner": "윤지우",
    "subOwner": "임하윤",
    "ownerEmail": "jwyoon@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0156",
    "phase": "1단계 - 사전준비",
    "system": "외환계",
    "work": "환경구축",
    "item": "외환계 환경구축",
    "task": "외환계 환경구축 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0155"
    ],
    "successor": [
      "MIG-0157"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "윤지우",
    "subOwner": "임하윤",
    "ownerEmail": "jwyoon@company.com",
    "plannedStart": "2026-08-23T09:00",
    "plannedEnd": "2026-08-23T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0157",
    "phase": "1단계 - 사전준비",
    "system": "외환계",
    "work": "환경구축",
    "item": "외환계 환경구축",
    "task": "외환계 환경구축 - 2차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0156"
    ],
    "successor": [
      "MIG-0158"
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
    "id": "MIG-0158",
    "phase": "1단계 - 사전준비",
    "system": "외환계",
    "work": "환경구축",
    "item": "외환계 환경구축",
    "task": "외환계 환경구축 - 성능/부하 확인",
    "critical": false,
    "predecessor": [
      "MIG-0157"
    ],
    "successor": [
      "MIG-0159"
    ],
    "deliverable": "성능/부하 확인 결과서",
    "owner": "임하윤",
    "subOwner": "한소율",
    "ownerEmail": "hylim@company.com",
    "plannedStart": "2026-08-25T09:00",
    "plannedEnd": "2026-08-25T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0159",
    "phase": "1단계 - 사전준비",
    "system": "외환계",
    "work": "환경구축",
    "item": "외환계 환경구축",
    "task": "외환계 환경구축 - 최종 리허설",
    "critical": false,
    "predecessor": [
      "MIG-0158"
    ],
    "successor": [
      "MIG-0160"
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
    "id": "MIG-0160",
    "phase": "1단계 - 사전준비",
    "system": "외환계",
    "work": "환경구축",
    "item": "외환계 환경구축",
    "task": "외환계 환경구축 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0159"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "한소율",
    "subOwner": "오예준",
    "ownerEmail": "syhan@company.com",
    "plannedStart": "2026-08-27T09:00",
    "plannedEnd": "2026-08-27T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0161",
    "phase": "2단계 - 데이터이관",
    "system": "외환계",
    "work": "데이터이관",
    "item": "외환계 데이터이관",
    "task": "외환계 데이터이관 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0162"
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
    "id": "MIG-0162",
    "phase": "2단계 - 데이터이관",
    "system": "외환계",
    "work": "데이터이관",
    "item": "외환계 데이터이관",
    "task": "외환계 데이터이관 - 상세 설계",
    "critical": false,
    "predecessor": [
      "MIG-0161"
    ],
    "successor": [
      "MIG-0163"
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
    "id": "MIG-0163",
    "phase": "2단계 - 데이터이관",
    "system": "외환계",
    "work": "데이터이관",
    "item": "외환계 데이터이관",
    "task": "외환계 데이터이관 - 개발/구성 착수",
    "critical": false,
    "predecessor": [
      "MIG-0162"
    ],
    "successor": [
      "MIG-0164"
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
    "id": "MIG-0164",
    "phase": "2단계 - 데이터이관",
    "system": "외환계",
    "work": "데이터이관",
    "item": "외환계 데이터이관",
    "task": "외환계 데이터이관 - 1차 구현 완료",
    "critical": false,
    "predecessor": [
      "MIG-0163"
    ],
    "successor": [
      "MIG-0165"
    ],
    "deliverable": "1차 구현 완료 결과서",
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
    "id": "MIG-0165",
    "phase": "2단계 - 데이터이관",
    "system": "외환계",
    "work": "데이터이관",
    "item": "외환계 데이터이관",
    "task": "외환계 데이터이관 - 1차 검토",
    "critical": false,
    "predecessor": [
      "MIG-0164"
    ],
    "successor": [
      "MIG-0166"
    ],
    "deliverable": "1차 검토 결과서",
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
    "id": "MIG-0166",
    "phase": "2단계 - 데이터이관",
    "system": "외환계",
    "work": "데이터이관",
    "item": "외환계 데이터이관",
    "task": "외환계 데이터이관 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0165"
    ],
    "successor": [
      "MIG-0167"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "임하윤",
    "subOwner": "한소율",
    "ownerEmail": "hylim@company.com",
    "plannedStart": "2026-08-23T09:00",
    "plannedEnd": "2026-08-23T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0167",
    "phase": "2단계 - 데이터이관",
    "system": "외환계",
    "work": "데이터이관",
    "item": "외환계 데이터이관",
    "task": "외환계 데이터이관 - 2차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0166"
    ],
    "successor": [
      "MIG-0168"
    ],
    "deliverable": "2차 검증 결과서",
    "owner": "한소율",
    "subOwner": "오예준",
    "ownerEmail": "syhan@company.com",
    "plannedStart": "2026-08-24T09:00",
    "plannedEnd": "2026-08-24T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0168",
    "phase": "2단계 - 데이터이관",
    "system": "외환계",
    "work": "데이터이관",
    "item": "외환계 데이터이관",
    "task": "외환계 데이터이관 - 성능/부하 확인",
    "critical": false,
    "predecessor": [
      "MIG-0167"
    ],
    "successor": [
      "MIG-0169"
    ],
    "deliverable": "성능/부하 확인 결과서",
    "owner": "한소율",
    "subOwner": "오예준",
    "ownerEmail": "syhan@company.com",
    "plannedStart": "2026-08-25T09:00",
    "plannedEnd": "2026-08-25T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0169",
    "phase": "2단계 - 데이터이관",
    "system": "외환계",
    "work": "데이터이관",
    "item": "외환계 데이터이관",
    "task": "외환계 데이터이관 - 최종 리허설",
    "critical": false,
    "predecessor": [
      "MIG-0168"
    ],
    "successor": [
      "MIG-0170"
    ],
    "deliverable": "최종 리허설 결과서",
    "owner": "한소율",
    "subOwner": "오예준",
    "ownerEmail": "syhan@company.com",
    "plannedStart": "2026-08-26T09:00",
    "plannedEnd": "2026-08-26T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0170",
    "phase": "2단계 - 데이터이관",
    "system": "외환계",
    "work": "데이터이관",
    "item": "외환계 데이터이관",
    "task": "외환계 데이터이관 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0169"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "오예준",
    "subOwner": "김도윤",
    "ownerEmail": "yjoh@company.com",
    "plannedStart": "2026-08-27T09:00",
    "plannedEnd": "2026-08-27T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0171",
    "phase": "3단계 - 정합성검증",
    "system": "외환계",
    "work": "정합성검증",
    "item": "외환계 정합성검증",
    "task": "외환계 정합성검증 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0172"
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
    "id": "MIG-0172",
    "phase": "3단계 - 정합성검증",
    "system": "외환계",
    "work": "정합성검증",
    "item": "외환계 정합성검증",
    "task": "외환계 정합성검증 - 상세 설계",
    "critical": false,
    "predecessor": [
      "MIG-0171"
    ],
    "successor": [
      "MIG-0173"
    ],
    "deliverable": "상세 설계 결과서",
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
    "id": "MIG-0173",
    "phase": "3단계 - 정합성검증",
    "system": "외환계",
    "work": "정합성검증",
    "item": "외환계 정합성검증",
    "task": "외환계 정합성검증 - 개발/구성 착수",
    "critical": false,
    "predecessor": [
      "MIG-0172"
    ],
    "successor": [
      "MIG-0174"
    ],
    "deliverable": "개발/구성 착수 결과서",
    "owner": "임하윤",
    "subOwner": "한소율",
    "ownerEmail": "hylim@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": "2026-08-20T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0174",
    "phase": "3단계 - 정합성검증",
    "system": "외환계",
    "work": "정합성검증",
    "item": "외환계 정합성검증",
    "task": "외환계 정합성검증 - 1차 구현 완료",
    "critical": false,
    "predecessor": [
      "MIG-0173"
    ],
    "successor": [
      "MIG-0175"
    ],
    "deliverable": "1차 구현 완료 결과서",
    "owner": "한소율",
    "subOwner": "오예준",
    "ownerEmail": "syhan@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": "2026-08-21T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0175",
    "phase": "3단계 - 정합성검증",
    "system": "외환계",
    "work": "정합성검증",
    "item": "외환계 정합성검증",
    "task": "외환계 정합성검증 - 1차 검토",
    "critical": false,
    "predecessor": [
      "MIG-0174"
    ],
    "successor": [
      "MIG-0176"
    ],
    "deliverable": "1차 검토 결과서",
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
    "id": "MIG-0176",
    "phase": "3단계 - 정합성검증",
    "system": "외환계",
    "work": "정합성검증",
    "item": "외환계 정합성검증",
    "task": "외환계 정합성검증 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0175"
    ],
    "successor": [
      "MIG-0177"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "한소율",
    "subOwner": "오예준",
    "ownerEmail": "syhan@company.com",
    "plannedStart": "2026-08-23T09:00",
    "plannedEnd": "2026-08-23T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0177",
    "phase": "3단계 - 정합성검증",
    "system": "외환계",
    "work": "정합성검증",
    "item": "외환계 정합성검증",
    "task": "외환계 정합성검증 - 2차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0176"
    ],
    "successor": [
      "MIG-0178"
    ],
    "deliverable": "2차 검증 결과서",
    "owner": "오예준",
    "subOwner": "김도윤",
    "ownerEmail": "yjoh@company.com",
    "plannedStart": "2026-08-24T09:00",
    "plannedEnd": "2026-08-24T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0178",
    "phase": "3단계 - 정합성검증",
    "system": "외환계",
    "work": "정합성검증",
    "item": "외환계 정합성검증",
    "task": "외환계 정합성검증 - 성능/부하 확인",
    "critical": false,
    "predecessor": [
      "MIG-0177"
    ],
    "successor": [
      "MIG-0179"
    ],
    "deliverable": "성능/부하 확인 결과서",
    "owner": "오예준",
    "subOwner": "김도윤",
    "ownerEmail": "yjoh@company.com",
    "plannedStart": "2026-08-25T09:00",
    "plannedEnd": "2026-08-25T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0179",
    "phase": "3단계 - 정합성검증",
    "system": "외환계",
    "work": "정합성검증",
    "item": "외환계 정합성검증",
    "task": "외환계 정합성검증 - 최종 리허설",
    "critical": false,
    "predecessor": [
      "MIG-0178"
    ],
    "successor": [
      "MIG-0180"
    ],
    "deliverable": "최종 리허설 결과서",
    "owner": "오예준",
    "subOwner": "김도윤",
    "ownerEmail": "yjoh@company.com",
    "plannedStart": "2026-08-26T09:00",
    "plannedEnd": "2026-08-26T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0180",
    "phase": "3단계 - 정합성검증",
    "system": "외환계",
    "work": "정합성검증",
    "item": "외환계 정합성검증",
    "task": "외환계 정합성검증 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0179"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "김도윤",
    "subOwner": "이서연",
    "ownerEmail": "dykim@company.com",
    "plannedStart": "2026-08-27T09:00",
    "plannedEnd": "2026-08-27T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0181",
    "phase": "4단계 - 통합테스트",
    "system": "외환계",
    "work": "통합테스트",
    "item": "외환계 통합테스트",
    "task": "외환계 통합테스트 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0182"
    ],
    "deliverable": "착수 및 요건 확인 결과서",
    "owner": "한소율",
    "subOwner": "오예준",
    "ownerEmail": "syhan@company.com",
    "plannedStart": "2026-08-18T09:00",
    "plannedEnd": "2026-08-18T18:00",
    "actualStart": "2026-08-18T09:00",
    "actualEnd": "2026-08-18T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0182",
    "phase": "4단계 - 통합테스트",
    "system": "외환계",
    "work": "통합테스트",
    "item": "외환계 통합테스트",
    "task": "외환계 통합테스트 - 상세 설계",
    "critical": false,
    "predecessor": [
      "MIG-0181"
    ],
    "successor": [
      "MIG-0183"
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
    "id": "MIG-0183",
    "phase": "4단계 - 통합테스트",
    "system": "외환계",
    "work": "통합테스트",
    "item": "외환계 통합테스트",
    "task": "외환계 통합테스트 - 개발/구성 착수",
    "critical": false,
    "predecessor": [
      "MIG-0182"
    ],
    "successor": [
      "MIG-0184"
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
    "id": "MIG-0184",
    "phase": "4단계 - 통합테스트",
    "system": "외환계",
    "work": "통합테스트",
    "item": "외환계 통합테스트",
    "task": "외환계 통합테스트 - 1차 구현 완료",
    "critical": false,
    "predecessor": [
      "MIG-0183"
    ],
    "successor": [
      "MIG-0185"
    ],
    "deliverable": "1차 구현 완료 결과서",
    "owner": "오예준",
    "subOwner": "김도윤",
    "ownerEmail": "yjoh@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": "2026-08-21T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0185",
    "phase": "4단계 - 통합테스트",
    "system": "외환계",
    "work": "통합테스트",
    "item": "외환계 통합테스트",
    "task": "외환계 통합테스트 - 1차 검토",
    "critical": false,
    "predecessor": [
      "MIG-0184"
    ],
    "successor": [
      "MIG-0186"
    ],
    "deliverable": "1차 검토 결과서",
    "owner": "오예준",
    "subOwner": "김도윤",
    "ownerEmail": "yjoh@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0186",
    "phase": "4단계 - 통합테스트",
    "system": "외환계",
    "work": "통합테스트",
    "item": "외환계 통합테스트",
    "task": "외환계 통합테스트 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0185"
    ],
    "successor": [
      "MIG-0187"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "오예준",
    "subOwner": "김도윤",
    "ownerEmail": "yjoh@company.com",
    "plannedStart": "2026-08-23T09:00",
    "plannedEnd": "2026-08-23T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0187",
    "phase": "4단계 - 통합테스트",
    "system": "외환계",
    "work": "통합테스트",
    "item": "외환계 통합테스트",
    "task": "외환계 통합테스트 - 2차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0186"
    ],
    "successor": [
      "MIG-0188"
    ],
    "deliverable": "2차 검증 결과서",
    "owner": "김도윤",
    "subOwner": "이서연",
    "ownerEmail": "dykim@company.com",
    "plannedStart": "2026-08-24T09:00",
    "plannedEnd": "2026-08-24T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0188",
    "phase": "4단계 - 통합테스트",
    "system": "외환계",
    "work": "통합테스트",
    "item": "외환계 통합테스트",
    "task": "외환계 통합테스트 - 성능/부하 확인",
    "critical": false,
    "predecessor": [
      "MIG-0187"
    ],
    "successor": [
      "MIG-0189"
    ],
    "deliverable": "성능/부하 확인 결과서",
    "owner": "김도윤",
    "subOwner": "이서연",
    "ownerEmail": "dykim@company.com",
    "plannedStart": "2026-08-25T09:00",
    "plannedEnd": "2026-08-25T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0189",
    "phase": "4단계 - 통합테스트",
    "system": "외환계",
    "work": "통합테스트",
    "item": "외환계 통합테스트",
    "task": "외환계 통합테스트 - 최종 리허설",
    "critical": false,
    "predecessor": [
      "MIG-0188"
    ],
    "successor": [
      "MIG-0190"
    ],
    "deliverable": "최종 리허설 결과서",
    "owner": "김도윤",
    "subOwner": "이서연",
    "ownerEmail": "dykim@company.com",
    "plannedStart": "2026-08-26T09:00",
    "plannedEnd": "2026-08-26T18:00",
    "actualStart": "2026-08-26T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0190",
    "phase": "4단계 - 통합테스트",
    "system": "외환계",
    "work": "통합테스트",
    "item": "외환계 통합테스트",
    "task": "외환계 통합테스트 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0189"
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
    "status": "예정"
  },
  {
    "id": "MIG-0191",
    "phase": "5단계 - 전환리허설",
    "system": "외환계",
    "work": "전환리허설",
    "item": "외환계 전환리허설",
    "task": "외환계 전환리허설 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0192"
    ],
    "deliverable": "착수 및 요건 확인 결과서",
    "owner": "오예준",
    "subOwner": "김도윤",
    "ownerEmail": "yjoh@company.com",
    "plannedStart": "2026-08-18T09:00",
    "plannedEnd": "2026-08-18T18:00",
    "actualStart": "2026-08-18T09:00",
    "actualEnd": "2026-08-18T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0192",
    "phase": "5단계 - 전환리허설",
    "system": "외환계",
    "work": "전환리허설",
    "item": "외환계 전환리허설",
    "task": "외환계 전환리허설 - 상세 설계",
    "critical": false,
    "predecessor": [
      "MIG-0191"
    ],
    "successor": [
      "MIG-0193"
    ],
    "deliverable": "상세 설계 결과서",
    "owner": "오예준",
    "subOwner": "김도윤",
    "ownerEmail": "yjoh@company.com",
    "plannedStart": "2026-08-19T09:00",
    "plannedEnd": "2026-08-19T18:00",
    "actualStart": "2026-08-19T09:00",
    "actualEnd": "2026-08-19T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0193",
    "phase": "5단계 - 전환리허설",
    "system": "외환계",
    "work": "전환리허설",
    "item": "외환계 전환리허설",
    "task": "외환계 전환리허설 - 개발/구성 착수",
    "critical": false,
    "predecessor": [
      "MIG-0192"
    ],
    "successor": [
      "MIG-0194"
    ],
    "deliverable": "개발/구성 착수 결과서",
    "owner": "오예준",
    "subOwner": "김도윤",
    "ownerEmail": "yjoh@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": "2026-08-20T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0194",
    "phase": "5단계 - 전환리허설",
    "system": "외환계",
    "work": "전환리허설",
    "item": "외환계 전환리허설",
    "task": "외환계 전환리허설 - 1차 구현 완료",
    "critical": false,
    "predecessor": [
      "MIG-0193"
    ],
    "successor": [
      "MIG-0195"
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
    "id": "MIG-0195",
    "phase": "5단계 - 전환리허설",
    "system": "외환계",
    "work": "전환리허설",
    "item": "외환계 전환리허설",
    "task": "외환계 전환리허설 - 1차 검토",
    "critical": false,
    "predecessor": [
      "MIG-0194"
    ],
    "successor": [
      "MIG-0196"
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
    "id": "MIG-0196",
    "phase": "5단계 - 전환리허설",
    "system": "외환계",
    "work": "전환리허설",
    "item": "외환계 전환리허설",
    "task": "외환계 전환리허설 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0195"
    ],
    "successor": [
      "MIG-0197"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "김도윤",
    "subOwner": "이서연",
    "ownerEmail": "dykim@company.com",
    "plannedStart": "2026-08-23T09:00",
    "plannedEnd": "2026-08-23T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0197",
    "phase": "5단계 - 전환리허설",
    "system": "외환계",
    "work": "전환리허설",
    "item": "외환계 전환리허설",
    "task": "외환계 전환리허설 - 2차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0196"
    ],
    "successor": [
      "MIG-0198"
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
    "id": "MIG-0198",
    "phase": "5단계 - 전환리허설",
    "system": "외환계",
    "work": "전환리허설",
    "item": "외환계 전환리허설",
    "task": "외환계 전환리허설 - 성능/부하 확인",
    "critical": false,
    "predecessor": [
      "MIG-0197"
    ],
    "successor": [
      "MIG-0199"
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
    "id": "MIG-0199",
    "phase": "5단계 - 전환리허설",
    "system": "외환계",
    "work": "전환리허설",
    "item": "외환계 전환리허설",
    "task": "외환계 전환리허설 - 최종 리허설",
    "critical": false,
    "predecessor": [
      "MIG-0198"
    ],
    "successor": [
      "MIG-0200"
    ],
    "deliverable": "최종 리허설 결과서",
    "owner": "이서연",
    "subOwner": "박민재",
    "ownerEmail": "sylee@company.com",
    "plannedStart": "2026-08-26T09:00",
    "plannedEnd": "2026-08-26T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0200",
    "phase": "5단계 - 전환리허설",
    "system": "외환계",
    "work": "전환리허설",
    "item": "외환계 전환리허설",
    "task": "외환계 전환리허설 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0199"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "박민재",
    "subOwner": "최지훈",
    "ownerEmail": "mjpark@company.com",
    "plannedStart": "2026-08-27T09:00",
    "plannedEnd": "2026-08-27T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0201",
    "phase": "1단계 - 사전준비",
    "system": "카드계",
    "work": "환경구축",
    "item": "카드계 환경구축",
    "task": "카드계 환경구축 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0202"
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
    "id": "MIG-0202",
    "phase": "1단계 - 사전준비",
    "system": "카드계",
    "work": "환경구축",
    "item": "카드계 환경구축",
    "task": "카드계 환경구축 - 상세 설계",
    "critical": false,
    "predecessor": [
      "MIG-0201"
    ],
    "successor": [
      "MIG-0203"
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
    "id": "MIG-0203",
    "phase": "1단계 - 사전준비",
    "system": "카드계",
    "work": "환경구축",
    "item": "카드계 환경구축",
    "task": "카드계 환경구축 - 개발/구성 착수",
    "critical": false,
    "predecessor": [
      "MIG-0202"
    ],
    "successor": [
      "MIG-0204"
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
    "id": "MIG-0204",
    "phase": "1단계 - 사전준비",
    "system": "카드계",
    "work": "환경구축",
    "item": "카드계 환경구축",
    "task": "카드계 환경구축 - 1차 구현 완료",
    "critical": false,
    "predecessor": [
      "MIG-0203"
    ],
    "successor": [
      "MIG-0205"
    ],
    "deliverable": "1차 구현 완료 결과서",
    "owner": "이서연",
    "subOwner": "박민재",
    "ownerEmail": "sylee@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0205",
    "phase": "1단계 - 사전준비",
    "system": "카드계",
    "work": "환경구축",
    "item": "카드계 환경구축",
    "task": "카드계 환경구축 - 1차 검토",
    "critical": false,
    "predecessor": [
      "MIG-0204"
    ],
    "successor": [
      "MIG-0206"
    ],
    "deliverable": "1차 검토 결과서",
    "owner": "이서연",
    "subOwner": "박민재",
    "ownerEmail": "sylee@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0206",
    "phase": "1단계 - 사전준비",
    "system": "카드계",
    "work": "환경구축",
    "item": "카드계 환경구축",
    "task": "카드계 환경구축 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0205"
    ],
    "successor": [
      "MIG-0207"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "이서연",
    "subOwner": "박민재",
    "ownerEmail": "sylee@company.com",
    "plannedStart": "2026-08-23T09:00",
    "plannedEnd": "2026-08-23T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0207",
    "phase": "1단계 - 사전준비",
    "system": "카드계",
    "work": "환경구축",
    "item": "카드계 환경구축",
    "task": "카드계 환경구축 - 2차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0206"
    ],
    "successor": [
      "MIG-0208"
    ],
    "deliverable": "2차 검증 결과서",
    "owner": "박민재",
    "subOwner": "최지훈",
    "ownerEmail": "mjpark@company.com",
    "plannedStart": "2026-08-24T09:00",
    "plannedEnd": "2026-08-24T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0208",
    "phase": "1단계 - 사전준비",
    "system": "카드계",
    "work": "환경구축",
    "item": "카드계 환경구축",
    "task": "카드계 환경구축 - 성능/부하 확인",
    "critical": false,
    "predecessor": [
      "MIG-0207"
    ],
    "successor": [
      "MIG-0209"
    ],
    "deliverable": "성능/부하 확인 결과서",
    "owner": "박민재",
    "subOwner": "최지훈",
    "ownerEmail": "mjpark@company.com",
    "plannedStart": "2026-08-25T09:00",
    "plannedEnd": "2026-08-25T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0209",
    "phase": "1단계 - 사전준비",
    "system": "카드계",
    "work": "환경구축",
    "item": "카드계 환경구축",
    "task": "카드계 환경구축 - 최종 리허설",
    "critical": false,
    "predecessor": [
      "MIG-0208"
    ],
    "successor": [
      "MIG-0210"
    ],
    "deliverable": "최종 리허설 결과서",
    "owner": "박민재",
    "subOwner": "최지훈",
    "ownerEmail": "mjpark@company.com",
    "plannedStart": "2026-08-26T09:00",
    "plannedEnd": "2026-08-26T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0210",
    "phase": "1단계 - 사전준비",
    "system": "카드계",
    "work": "환경구축",
    "item": "카드계 환경구축",
    "task": "카드계 환경구축 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0209"
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
    "id": "MIG-0211",
    "phase": "2단계 - 데이터이관",
    "system": "카드계",
    "work": "데이터이관",
    "item": "카드계 데이터이관",
    "task": "카드계 데이터이관 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0212"
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
    "id": "MIG-0212",
    "phase": "2단계 - 데이터이관",
    "system": "카드계",
    "work": "데이터이관",
    "item": "카드계 데이터이관",
    "task": "카드계 데이터이관 - 상세 설계",
    "critical": false,
    "predecessor": [
      "MIG-0211"
    ],
    "successor": [
      "MIG-0213"
    ],
    "deliverable": "상세 설계 결과서",
    "owner": "이서연",
    "subOwner": "박민재",
    "ownerEmail": "sylee@company.com",
    "plannedStart": "2026-08-19T09:00",
    "plannedEnd": "2026-08-19T18:00",
    "actualStart": "2026-08-19T09:00",
    "actualEnd": "2026-08-19T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0213",
    "phase": "2단계 - 데이터이관",
    "system": "카드계",
    "work": "데이터이관",
    "item": "카드계 데이터이관",
    "task": "카드계 데이터이관 - 개발/구성 착수",
    "critical": false,
    "predecessor": [
      "MIG-0212"
    ],
    "successor": [
      "MIG-0214"
    ],
    "deliverable": "개발/구성 착수 결과서",
    "owner": "이서연",
    "subOwner": "박민재",
    "ownerEmail": "sylee@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": "2026-08-20T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0214",
    "phase": "2단계 - 데이터이관",
    "system": "카드계",
    "work": "데이터이관",
    "item": "카드계 데이터이관",
    "task": "카드계 데이터이관 - 1차 구현 완료",
    "critical": false,
    "predecessor": [
      "MIG-0213"
    ],
    "successor": [
      "MIG-0215"
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
    "id": "MIG-0215",
    "phase": "2단계 - 데이터이관",
    "system": "카드계",
    "work": "데이터이관",
    "item": "카드계 데이터이관",
    "task": "카드계 데이터이관 - 1차 검토",
    "critical": false,
    "predecessor": [
      "MIG-0214"
    ],
    "successor": [
      "MIG-0216"
    ],
    "deliverable": "1차 검토 결과서",
    "owner": "박민재",
    "subOwner": "최지훈",
    "ownerEmail": "mjpark@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": "2026-08-22T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0216",
    "phase": "2단계 - 데이터이관",
    "system": "카드계",
    "work": "데이터이관",
    "item": "카드계 데이터이관",
    "task": "카드계 데이터이관 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0215"
    ],
    "successor": [
      "MIG-0217"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "박민재",
    "subOwner": "최지훈",
    "ownerEmail": "mjpark@company.com",
    "plannedStart": "2026-08-23T09:00",
    "plannedEnd": "2026-08-23T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0217",
    "phase": "2단계 - 데이터이관",
    "system": "카드계",
    "work": "데이터이관",
    "item": "카드계 데이터이관",
    "task": "카드계 데이터이관 - 2차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0216"
    ],
    "successor": [
      "MIG-0218"
    ],
    "deliverable": "2차 검증 결과서",
    "owner": "최지훈",
    "subOwner": "정하은",
    "ownerEmail": "jhchoi@company.com",
    "plannedStart": "2026-08-24T09:00",
    "plannedEnd": "2026-08-24T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0218",
    "phase": "2단계 - 데이터이관",
    "system": "카드계",
    "work": "데이터이관",
    "item": "카드계 데이터이관",
    "task": "카드계 데이터이관 - 성능/부하 확인",
    "critical": false,
    "predecessor": [
      "MIG-0217"
    ],
    "successor": [
      "MIG-0219"
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
    "id": "MIG-0219",
    "phase": "2단계 - 데이터이관",
    "system": "카드계",
    "work": "데이터이관",
    "item": "카드계 데이터이관",
    "task": "카드계 데이터이관 - 최종 리허설",
    "critical": false,
    "predecessor": [
      "MIG-0218"
    ],
    "successor": [
      "MIG-0220"
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
    "id": "MIG-0220",
    "phase": "2단계 - 데이터이관",
    "system": "카드계",
    "work": "데이터이관",
    "item": "카드계 데이터이관",
    "task": "카드계 데이터이관 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0219"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "정하은",
    "subOwner": "강서준",
    "ownerEmail": "hejung@company.com",
    "plannedStart": "2026-08-27T09:00",
    "plannedEnd": "2026-08-27T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0221",
    "phase": "3단계 - 정합성검증",
    "system": "카드계",
    "work": "정합성검증",
    "item": "카드계 정합성검증",
    "task": "카드계 정합성검증 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0222"
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
    "id": "MIG-0222",
    "phase": "3단계 - 정합성검증",
    "system": "카드계",
    "work": "정합성검증",
    "item": "카드계 정합성검증",
    "task": "카드계 정합성검증 - 상세 설계",
    "critical": false,
    "predecessor": [
      "MIG-0221"
    ],
    "successor": [
      "MIG-0223"
    ],
    "deliverable": "상세 설계 결과서",
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
    "id": "MIG-0223",
    "phase": "3단계 - 정합성검증",
    "system": "카드계",
    "work": "정합성검증",
    "item": "카드계 정합성검증",
    "task": "카드계 정합성검증 - 개발/구성 착수",
    "critical": false,
    "predecessor": [
      "MIG-0222"
    ],
    "successor": [
      "MIG-0224"
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
    "id": "MIG-0224",
    "phase": "3단계 - 정합성검증",
    "system": "카드계",
    "work": "정합성검증",
    "item": "카드계 정합성검증",
    "task": "카드계 정합성검증 - 1차 구현 완료",
    "critical": false,
    "predecessor": [
      "MIG-0223"
    ],
    "successor": [
      "MIG-0225"
    ],
    "deliverable": "1차 구현 완료 결과서",
    "owner": "최지훈",
    "subOwner": "정하은",
    "ownerEmail": "jhchoi@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": "2026-08-21T09:00",
    "actualEnd": "2026-08-21T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0225",
    "phase": "3단계 - 정합성검증",
    "system": "카드계",
    "work": "정합성검증",
    "item": "카드계 정합성검증",
    "task": "카드계 정합성검증 - 1차 검토",
    "critical": false,
    "predecessor": [
      "MIG-0224"
    ],
    "successor": [
      "MIG-0226"
    ],
    "deliverable": "1차 검토 결과서",
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
    "id": "MIG-0226",
    "phase": "3단계 - 정합성검증",
    "system": "카드계",
    "work": "정합성검증",
    "item": "카드계 정합성검증",
    "task": "카드계 정합성검증 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0225"
    ],
    "successor": [
      "MIG-0227"
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
    "id": "MIG-0227",
    "phase": "3단계 - 정합성검증",
    "system": "카드계",
    "work": "정합성검증",
    "item": "카드계 정합성검증",
    "task": "카드계 정합성검증 - 2차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0226"
    ],
    "successor": [
      "MIG-0228"
    ],
    "deliverable": "2차 검증 결과서",
    "owner": "정하은",
    "subOwner": "강서준",
    "ownerEmail": "hejung@company.com",
    "plannedStart": "2026-08-24T09:00",
    "plannedEnd": "2026-08-24T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0228",
    "phase": "3단계 - 정합성검증",
    "system": "카드계",
    "work": "정합성검증",
    "item": "카드계 정합성검증",
    "task": "카드계 정합성검증 - 성능/부하 확인",
    "critical": false,
    "predecessor": [
      "MIG-0227"
    ],
    "successor": [
      "MIG-0229"
    ],
    "deliverable": "성능/부하 확인 결과서",
    "owner": "정하은",
    "subOwner": "강서준",
    "ownerEmail": "hejung@company.com",
    "plannedStart": "2026-08-25T09:00",
    "plannedEnd": "2026-08-25T18:00",
    "actualStart": "2026-08-25T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0229",
    "phase": "3단계 - 정합성검증",
    "system": "카드계",
    "work": "정합성검증",
    "item": "카드계 정합성검증",
    "task": "카드계 정합성검증 - 최종 리허설",
    "critical": false,
    "predecessor": [
      "MIG-0228"
    ],
    "successor": [
      "MIG-0230"
    ],
    "deliverable": "최종 리허설 결과서",
    "owner": "정하은",
    "subOwner": "강서준",
    "ownerEmail": "hejung@company.com",
    "plannedStart": "2026-08-26T09:00",
    "plannedEnd": "2026-08-26T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0230",
    "phase": "3단계 - 정합성검증",
    "system": "카드계",
    "work": "정합성검증",
    "item": "카드계 정합성검증",
    "task": "카드계 정합성검증 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0229"
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
    "status": "예정"
  },
  {
    "id": "MIG-0231",
    "phase": "4단계 - 통합테스트",
    "system": "카드계",
    "work": "통합테스트",
    "item": "카드계 통합테스트",
    "task": "카드계 통합테스트 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0232"
    ],
    "deliverable": "착수 및 요건 확인 결과서",
    "owner": "최지훈",
    "subOwner": "정하은",
    "ownerEmail": "jhchoi@company.com",
    "plannedStart": "2026-08-18T09:00",
    "plannedEnd": "2026-08-18T18:00",
    "actualStart": "2026-08-18T09:00",
    "actualEnd": "2026-08-18T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0232",
    "phase": "4단계 - 통합테스트",
    "system": "카드계",
    "work": "통합테스트",
    "item": "카드계 통합테스트",
    "task": "카드계 통합테스트 - 상세 설계",
    "critical": false,
    "predecessor": [
      "MIG-0231"
    ],
    "successor": [
      "MIG-0233"
    ],
    "deliverable": "상세 설계 결과서",
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
    "id": "MIG-0233",
    "phase": "4단계 - 통합테스트",
    "system": "카드계",
    "work": "통합테스트",
    "item": "카드계 통합테스트",
    "task": "카드계 통합테스트 - 개발/구성 착수",
    "critical": false,
    "predecessor": [
      "MIG-0232"
    ],
    "successor": [
      "MIG-0234"
    ],
    "deliverable": "개발/구성 착수 결과서",
    "owner": "최지훈",
    "subOwner": "정하은",
    "ownerEmail": "jhchoi@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0234",
    "phase": "4단계 - 통합테스트",
    "system": "카드계",
    "work": "통합테스트",
    "item": "카드계 통합테스트",
    "task": "카드계 통합테스트 - 1차 구현 완료",
    "critical": false,
    "predecessor": [
      "MIG-0233"
    ],
    "successor": [
      "MIG-0235"
    ],
    "deliverable": "1차 구현 완료 결과서",
    "owner": "정하은",
    "subOwner": "강서준",
    "ownerEmail": "hejung@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": "2026-08-21T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0235",
    "phase": "4단계 - 통합테스트",
    "system": "카드계",
    "work": "통합테스트",
    "item": "카드계 통합테스트",
    "task": "카드계 통합테스트 - 1차 검토",
    "critical": false,
    "predecessor": [
      "MIG-0234"
    ],
    "successor": [
      "MIG-0236"
    ],
    "deliverable": "1차 검토 결과서",
    "owner": "정하은",
    "subOwner": "강서준",
    "ownerEmail": "hejung@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": "2026-08-22T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0236",
    "phase": "4단계 - 통합테스트",
    "system": "카드계",
    "work": "통합테스트",
    "item": "카드계 통합테스트",
    "task": "카드계 통합테스트 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0235"
    ],
    "successor": [
      "MIG-0237"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "정하은",
    "subOwner": "강서준",
    "ownerEmail": "hejung@company.com",
    "plannedStart": "2026-08-23T09:00",
    "plannedEnd": "2026-08-23T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0237",
    "phase": "4단계 - 통합테스트",
    "system": "카드계",
    "work": "통합테스트",
    "item": "카드계 통합테스트",
    "task": "카드계 통합테스트 - 2차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0236"
    ],
    "successor": [
      "MIG-0238"
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
    "id": "MIG-0238",
    "phase": "4단계 - 통합테스트",
    "system": "카드계",
    "work": "통합테스트",
    "item": "카드계 통합테스트",
    "task": "카드계 통합테스트 - 성능/부하 확인",
    "critical": false,
    "predecessor": [
      "MIG-0237"
    ],
    "successor": [
      "MIG-0239"
    ],
    "deliverable": "성능/부하 확인 결과서",
    "owner": "강서준",
    "subOwner": "윤지우",
    "ownerEmail": "sjkang@company.com",
    "plannedStart": "2026-08-25T09:00",
    "plannedEnd": "2026-08-25T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0239",
    "phase": "4단계 - 통합테스트",
    "system": "카드계",
    "work": "통합테스트",
    "item": "카드계 통합테스트",
    "task": "카드계 통합테스트 - 최종 리허설",
    "critical": false,
    "predecessor": [
      "MIG-0238"
    ],
    "successor": [
      "MIG-0240"
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
    "id": "MIG-0240",
    "phase": "4단계 - 통합테스트",
    "system": "카드계",
    "work": "통합테스트",
    "item": "카드계 통합테스트",
    "task": "카드계 통합테스트 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0239"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "윤지우",
    "subOwner": "임하윤",
    "ownerEmail": "jwyoon@company.com",
    "plannedStart": "2026-08-27T09:00",
    "plannedEnd": "2026-08-27T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0241",
    "phase": "5단계 - 전환리허설",
    "system": "카드계",
    "work": "전환리허설",
    "item": "카드계 전환리허설",
    "task": "카드계 전환리허설 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0242"
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
    "id": "MIG-0242",
    "phase": "5단계 - 전환리허설",
    "system": "카드계",
    "work": "전환리허설",
    "item": "카드계 전환리허설",
    "task": "카드계 전환리허설 - 상세 설계",
    "critical": false,
    "predecessor": [
      "MIG-0241"
    ],
    "successor": [
      "MIG-0243"
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
    "id": "MIG-0243",
    "phase": "5단계 - 전환리허설",
    "system": "카드계",
    "work": "전환리허설",
    "item": "카드계 전환리허설",
    "task": "카드계 전환리허설 - 개발/구성 착수",
    "critical": false,
    "predecessor": [
      "MIG-0242"
    ],
    "successor": [
      "MIG-0244"
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
    "id": "MIG-0244",
    "phase": "5단계 - 전환리허설",
    "system": "카드계",
    "work": "전환리허설",
    "item": "카드계 전환리허설",
    "task": "카드계 전환리허설 - 1차 구현 완료",
    "critical": false,
    "predecessor": [
      "MIG-0243"
    ],
    "successor": [
      "MIG-0245"
    ],
    "deliverable": "1차 구현 완료 결과서",
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
    "id": "MIG-0245",
    "phase": "5단계 - 전환리허설",
    "system": "카드계",
    "work": "전환리허설",
    "item": "카드계 전환리허설",
    "task": "카드계 전환리허설 - 1차 검토",
    "critical": false,
    "predecessor": [
      "MIG-0244"
    ],
    "successor": [
      "MIG-0246"
    ],
    "deliverable": "1차 검토 결과서",
    "owner": "강서준",
    "subOwner": "윤지우",
    "ownerEmail": "sjkang@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0246",
    "phase": "5단계 - 전환리허설",
    "system": "카드계",
    "work": "전환리허설",
    "item": "카드계 전환리허설",
    "task": "카드계 전환리허설 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0245"
    ],
    "successor": [
      "MIG-0247"
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
    "id": "MIG-0247",
    "phase": "5단계 - 전환리허설",
    "system": "카드계",
    "work": "전환리허설",
    "item": "카드계 전환리허설",
    "task": "카드계 전환리허설 - 2차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0246"
    ],
    "successor": [
      "MIG-0248"
    ],
    "deliverable": "2차 검증 결과서",
    "owner": "윤지우",
    "subOwner": "임하윤",
    "ownerEmail": "jwyoon@company.com",
    "plannedStart": "2026-08-24T09:00",
    "plannedEnd": "2026-08-24T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0248",
    "phase": "5단계 - 전환리허설",
    "system": "카드계",
    "work": "전환리허설",
    "item": "카드계 전환리허설",
    "task": "카드계 전환리허설 - 성능/부하 확인",
    "critical": false,
    "predecessor": [
      "MIG-0247"
    ],
    "successor": [
      "MIG-0249"
    ],
    "deliverable": "성능/부하 확인 결과서",
    "owner": "윤지우",
    "subOwner": "임하윤",
    "ownerEmail": "jwyoon@company.com",
    "plannedStart": "2026-08-25T09:00",
    "plannedEnd": "2026-08-25T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0249",
    "phase": "5단계 - 전환리허설",
    "system": "카드계",
    "work": "전환리허설",
    "item": "카드계 전환리허설",
    "task": "카드계 전환리허설 - 최종 리허설",
    "critical": false,
    "predecessor": [
      "MIG-0248"
    ],
    "successor": [
      "MIG-0250"
    ],
    "deliverable": "최종 리허설 결과서",
    "owner": "윤지우",
    "subOwner": "임하윤",
    "ownerEmail": "jwyoon@company.com",
    "plannedStart": "2026-08-26T09:00",
    "plannedEnd": "2026-08-26T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0250",
    "phase": "5단계 - 전환리허설",
    "system": "카드계",
    "work": "전환리허설",
    "item": "카드계 전환리허설",
    "task": "카드계 전환리허설 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0249"
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
    "id": "MIG-0251",
    "phase": "1단계 - 사전준비",
    "system": "채널계",
    "work": "환경구축",
    "item": "채널계 환경구축",
    "task": "채널계 환경구축 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0252"
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
    "id": "MIG-0252",
    "phase": "1단계 - 사전준비",
    "system": "채널계",
    "work": "환경구축",
    "item": "채널계 환경구축",
    "task": "채널계 환경구축 - 상세 설계",
    "critical": false,
    "predecessor": [
      "MIG-0251"
    ],
    "successor": [
      "MIG-0253"
    ],
    "deliverable": "상세 설계 결과서",
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
    "id": "MIG-0253",
    "phase": "1단계 - 사전준비",
    "system": "채널계",
    "work": "환경구축",
    "item": "채널계 환경구축",
    "task": "채널계 환경구축 - 개발/구성 착수",
    "critical": false,
    "predecessor": [
      "MIG-0252"
    ],
    "successor": [
      "MIG-0254"
    ],
    "deliverable": "개발/구성 착수 결과서",
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
    "id": "MIG-0254",
    "phase": "1단계 - 사전준비",
    "system": "채널계",
    "work": "환경구축",
    "item": "채널계 환경구축",
    "task": "채널계 환경구축 - 1차 구현 완료",
    "critical": false,
    "predecessor": [
      "MIG-0253"
    ],
    "successor": [
      "MIG-0255"
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
    "id": "MIG-0255",
    "phase": "1단계 - 사전준비",
    "system": "채널계",
    "work": "환경구축",
    "item": "채널계 환경구축",
    "task": "채널계 환경구축 - 1차 검토",
    "critical": false,
    "predecessor": [
      "MIG-0254"
    ],
    "successor": [
      "MIG-0256"
    ],
    "deliverable": "1차 검토 결과서",
    "owner": "윤지우",
    "subOwner": "임하윤",
    "ownerEmail": "jwyoon@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0256",
    "phase": "1단계 - 사전준비",
    "system": "채널계",
    "work": "환경구축",
    "item": "채널계 환경구축",
    "task": "채널계 환경구축 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0255"
    ],
    "successor": [
      "MIG-0257"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "윤지우",
    "subOwner": "임하윤",
    "ownerEmail": "jwyoon@company.com",
    "plannedStart": "2026-08-23T09:00",
    "plannedEnd": "2026-08-23T18:00",
    "actualStart": "2026-08-23T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0257",
    "phase": "1단계 - 사전준비",
    "system": "채널계",
    "work": "환경구축",
    "item": "채널계 환경구축",
    "task": "채널계 환경구축 - 2차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0256"
    ],
    "successor": [
      "MIG-0258"
    ],
    "deliverable": "2차 검증 결과서",
    "owner": "임하윤",
    "subOwner": "한소율",
    "ownerEmail": "hylim@company.com",
    "plannedStart": "2026-08-24T09:00",
    "plannedEnd": "2026-08-24T18:00",
    "actualStart": "2026-08-24T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0258",
    "phase": "1단계 - 사전준비",
    "system": "채널계",
    "work": "환경구축",
    "item": "채널계 환경구축",
    "task": "채널계 환경구축 - 성능/부하 확인",
    "critical": false,
    "predecessor": [
      "MIG-0257"
    ],
    "successor": [
      "MIG-0259"
    ],
    "deliverable": "성능/부하 확인 결과서",
    "owner": "임하윤",
    "subOwner": "한소율",
    "ownerEmail": "hylim@company.com",
    "plannedStart": "2026-08-25T09:00",
    "plannedEnd": "2026-08-25T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0259",
    "phase": "1단계 - 사전준비",
    "system": "채널계",
    "work": "환경구축",
    "item": "채널계 환경구축",
    "task": "채널계 환경구축 - 최종 리허설",
    "critical": false,
    "predecessor": [
      "MIG-0258"
    ],
    "successor": [
      "MIG-0260"
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
    "id": "MIG-0260",
    "phase": "1단계 - 사전준비",
    "system": "채널계",
    "work": "환경구축",
    "item": "채널계 환경구축",
    "task": "채널계 환경구축 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0259"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "한소율",
    "subOwner": "오예준",
    "ownerEmail": "syhan@company.com",
    "plannedStart": "2026-08-27T09:00",
    "plannedEnd": "2026-08-27T18:00",
    "actualStart": "2026-08-27T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0261",
    "phase": "2단계 - 데이터이관",
    "system": "채널계",
    "work": "데이터이관",
    "item": "채널계 데이터이관",
    "task": "채널계 데이터이관 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0262"
    ],
    "deliverable": "착수 및 요건 확인 결과서",
    "owner": "윤지우",
    "subOwner": "임하윤",
    "ownerEmail": "jwyoon@company.com",
    "plannedStart": "2026-08-18T09:00",
    "plannedEnd": "2026-08-18T18:00",
    "actualStart": "2026-08-18T09:00",
    "actualEnd": "2026-08-18T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0262",
    "phase": "2단계 - 데이터이관",
    "system": "채널계",
    "work": "데이터이관",
    "item": "채널계 데이터이관",
    "task": "채널계 데이터이관 - 상세 설계",
    "critical": false,
    "predecessor": [
      "MIG-0261"
    ],
    "successor": [
      "MIG-0263"
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
    "id": "MIG-0263",
    "phase": "2단계 - 데이터이관",
    "system": "채널계",
    "work": "데이터이관",
    "item": "채널계 데이터이관",
    "task": "채널계 데이터이관 - 개발/구성 착수",
    "critical": false,
    "predecessor": [
      "MIG-0262"
    ],
    "successor": [
      "MIG-0264"
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
    "id": "MIG-0264",
    "phase": "2단계 - 데이터이관",
    "system": "채널계",
    "work": "데이터이관",
    "item": "채널계 데이터이관",
    "task": "채널계 데이터이관 - 1차 구현 완료",
    "critical": false,
    "predecessor": [
      "MIG-0263"
    ],
    "successor": [
      "MIG-0265"
    ],
    "deliverable": "1차 구현 완료 결과서",
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
    "id": "MIG-0265",
    "phase": "2단계 - 데이터이관",
    "system": "채널계",
    "work": "데이터이관",
    "item": "채널계 데이터이관",
    "task": "채널계 데이터이관 - 1차 검토",
    "critical": false,
    "predecessor": [
      "MIG-0264"
    ],
    "successor": [
      "MIG-0266"
    ],
    "deliverable": "1차 검토 결과서",
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
    "id": "MIG-0266",
    "phase": "2단계 - 데이터이관",
    "system": "채널계",
    "work": "데이터이관",
    "item": "채널계 데이터이관",
    "task": "채널계 데이터이관 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0265"
    ],
    "successor": [
      "MIG-0267"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "임하윤",
    "subOwner": "한소율",
    "ownerEmail": "hylim@company.com",
    "plannedStart": "2026-08-23T09:00",
    "plannedEnd": "2026-08-23T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0267",
    "phase": "2단계 - 데이터이관",
    "system": "채널계",
    "work": "데이터이관",
    "item": "채널계 데이터이관",
    "task": "채널계 데이터이관 - 2차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0266"
    ],
    "successor": [
      "MIG-0268"
    ],
    "deliverable": "2차 검증 결과서",
    "owner": "한소율",
    "subOwner": "오예준",
    "ownerEmail": "syhan@company.com",
    "plannedStart": "2026-08-24T09:00",
    "plannedEnd": "2026-08-24T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0268",
    "phase": "2단계 - 데이터이관",
    "system": "채널계",
    "work": "데이터이관",
    "item": "채널계 데이터이관",
    "task": "채널계 데이터이관 - 성능/부하 확인",
    "critical": false,
    "predecessor": [
      "MIG-0267"
    ],
    "successor": [
      "MIG-0269"
    ],
    "deliverable": "성능/부하 확인 결과서",
    "owner": "한소율",
    "subOwner": "오예준",
    "ownerEmail": "syhan@company.com",
    "plannedStart": "2026-08-25T09:00",
    "plannedEnd": "2026-08-25T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0269",
    "phase": "2단계 - 데이터이관",
    "system": "채널계",
    "work": "데이터이관",
    "item": "채널계 데이터이관",
    "task": "채널계 데이터이관 - 최종 리허설",
    "critical": false,
    "predecessor": [
      "MIG-0268"
    ],
    "successor": [
      "MIG-0270"
    ],
    "deliverable": "최종 리허설 결과서",
    "owner": "한소율",
    "subOwner": "오예준",
    "ownerEmail": "syhan@company.com",
    "plannedStart": "2026-08-26T09:00",
    "plannedEnd": "2026-08-26T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0270",
    "phase": "2단계 - 데이터이관",
    "system": "채널계",
    "work": "데이터이관",
    "item": "채널계 데이터이관",
    "task": "채널계 데이터이관 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0269"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "오예준",
    "subOwner": "김도윤",
    "ownerEmail": "yjoh@company.com",
    "plannedStart": "2026-08-27T09:00",
    "plannedEnd": "2026-08-27T18:00",
    "actualStart": "2026-08-27T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0271",
    "phase": "3단계 - 정합성검증",
    "system": "채널계",
    "work": "정합성검증",
    "item": "채널계 정합성검증",
    "task": "채널계 정합성검증 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0272"
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
    "id": "MIG-0272",
    "phase": "3단계 - 정합성검증",
    "system": "채널계",
    "work": "정합성검증",
    "item": "채널계 정합성검증",
    "task": "채널계 정합성검증 - 상세 설계",
    "critical": false,
    "predecessor": [
      "MIG-0271"
    ],
    "successor": [
      "MIG-0273"
    ],
    "deliverable": "상세 설계 결과서",
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
    "id": "MIG-0273",
    "phase": "3단계 - 정합성검증",
    "system": "채널계",
    "work": "정합성검증",
    "item": "채널계 정합성검증",
    "task": "채널계 정합성검증 - 개발/구성 착수",
    "critical": false,
    "predecessor": [
      "MIG-0272"
    ],
    "successor": [
      "MIG-0274"
    ],
    "deliverable": "개발/구성 착수 결과서",
    "owner": "임하윤",
    "subOwner": "한소율",
    "ownerEmail": "hylim@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": "2026-08-20T09:00",
    "actualEnd": "2026-08-20T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0274",
    "phase": "3단계 - 정합성검증",
    "system": "채널계",
    "work": "정합성검증",
    "item": "채널계 정합성검증",
    "task": "채널계 정합성검증 - 1차 구현 완료",
    "critical": false,
    "predecessor": [
      "MIG-0273"
    ],
    "successor": [
      "MIG-0275"
    ],
    "deliverable": "1차 구현 완료 결과서",
    "owner": "한소율",
    "subOwner": "오예준",
    "ownerEmail": "syhan@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": "2026-08-21T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0275",
    "phase": "3단계 - 정합성검증",
    "system": "채널계",
    "work": "정합성검증",
    "item": "채널계 정합성검증",
    "task": "채널계 정합성검증 - 1차 검토",
    "critical": false,
    "predecessor": [
      "MIG-0274"
    ],
    "successor": [
      "MIG-0276"
    ],
    "deliverable": "1차 검토 결과서",
    "owner": "한소율",
    "subOwner": "오예준",
    "ownerEmail": "syhan@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": "2026-08-22T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0276",
    "phase": "3단계 - 정합성검증",
    "system": "채널계",
    "work": "정합성검증",
    "item": "채널계 정합성검증",
    "task": "채널계 정합성검증 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0275"
    ],
    "successor": [
      "MIG-0277"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "한소율",
    "subOwner": "오예준",
    "ownerEmail": "syhan@company.com",
    "plannedStart": "2026-08-23T09:00",
    "plannedEnd": "2026-08-23T18:00",
    "actualStart": "2026-08-23T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0277",
    "phase": "3단계 - 정합성검증",
    "system": "채널계",
    "work": "정합성검증",
    "item": "채널계 정합성검증",
    "task": "채널계 정합성검증 - 2차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0276"
    ],
    "successor": [
      "MIG-0278"
    ],
    "deliverable": "2차 검증 결과서",
    "owner": "오예준",
    "subOwner": "김도윤",
    "ownerEmail": "yjoh@company.com",
    "plannedStart": "2026-08-24T09:00",
    "plannedEnd": "2026-08-24T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0278",
    "phase": "3단계 - 정합성검증",
    "system": "채널계",
    "work": "정합성검증",
    "item": "채널계 정합성검증",
    "task": "채널계 정합성검증 - 성능/부하 확인",
    "critical": false,
    "predecessor": [
      "MIG-0277"
    ],
    "successor": [
      "MIG-0279"
    ],
    "deliverable": "성능/부하 확인 결과서",
    "owner": "오예준",
    "subOwner": "김도윤",
    "ownerEmail": "yjoh@company.com",
    "plannedStart": "2026-08-25T09:00",
    "plannedEnd": "2026-08-25T18:00",
    "actualStart": "2026-08-25T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0279",
    "phase": "3단계 - 정합성검증",
    "system": "채널계",
    "work": "정합성검증",
    "item": "채널계 정합성검증",
    "task": "채널계 정합성검증 - 최종 리허설",
    "critical": false,
    "predecessor": [
      "MIG-0278"
    ],
    "successor": [
      "MIG-0280"
    ],
    "deliverable": "최종 리허설 결과서",
    "owner": "오예준",
    "subOwner": "김도윤",
    "ownerEmail": "yjoh@company.com",
    "plannedStart": "2026-08-26T09:00",
    "plannedEnd": "2026-08-26T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0280",
    "phase": "3단계 - 정합성검증",
    "system": "채널계",
    "work": "정합성검증",
    "item": "채널계 정합성검증",
    "task": "채널계 정합성검증 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0279"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "김도윤",
    "subOwner": "이서연",
    "ownerEmail": "dykim@company.com",
    "plannedStart": "2026-08-27T09:00",
    "plannedEnd": "2026-08-27T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0281",
    "phase": "4단계 - 통합테스트",
    "system": "채널계",
    "work": "통합테스트",
    "item": "채널계 통합테스트",
    "task": "채널계 통합테스트 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0282"
    ],
    "deliverable": "착수 및 요건 확인 결과서",
    "owner": "한소율",
    "subOwner": "오예준",
    "ownerEmail": "syhan@company.com",
    "plannedStart": "2026-08-18T09:00",
    "plannedEnd": "2026-08-18T18:00",
    "actualStart": "2026-08-18T09:00",
    "actualEnd": "2026-08-18T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0282",
    "phase": "4단계 - 통합테스트",
    "system": "채널계",
    "work": "통합테스트",
    "item": "채널계 통합테스트",
    "task": "채널계 통합테스트 - 상세 설계",
    "critical": false,
    "predecessor": [
      "MIG-0281"
    ],
    "successor": [
      "MIG-0283"
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
    "id": "MIG-0283",
    "phase": "4단계 - 통합테스트",
    "system": "채널계",
    "work": "통합테스트",
    "item": "채널계 통합테스트",
    "task": "채널계 통합테스트 - 개발/구성 착수",
    "critical": false,
    "predecessor": [
      "MIG-0282"
    ],
    "successor": [
      "MIG-0284"
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
    "id": "MIG-0284",
    "phase": "4단계 - 통합테스트",
    "system": "채널계",
    "work": "통합테스트",
    "item": "채널계 통합테스트",
    "task": "채널계 통합테스트 - 1차 구현 완료",
    "critical": false,
    "predecessor": [
      "MIG-0283"
    ],
    "successor": [
      "MIG-0285"
    ],
    "deliverable": "1차 구현 완료 결과서",
    "owner": "오예준",
    "subOwner": "김도윤",
    "ownerEmail": "yjoh@company.com",
    "plannedStart": "2026-08-21T09:00",
    "plannedEnd": "2026-08-21T18:00",
    "actualStart": "2026-08-21T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0285",
    "phase": "4단계 - 통합테스트",
    "system": "채널계",
    "work": "통합테스트",
    "item": "채널계 통합테스트",
    "task": "채널계 통합테스트 - 1차 검토",
    "critical": false,
    "predecessor": [
      "MIG-0284"
    ],
    "successor": [
      "MIG-0286"
    ],
    "deliverable": "1차 검토 결과서",
    "owner": "오예준",
    "subOwner": "김도윤",
    "ownerEmail": "yjoh@company.com",
    "plannedStart": "2026-08-22T09:00",
    "plannedEnd": "2026-08-22T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0286",
    "phase": "4단계 - 통합테스트",
    "system": "채널계",
    "work": "통합테스트",
    "item": "채널계 통합테스트",
    "task": "채널계 통합테스트 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0285"
    ],
    "successor": [
      "MIG-0287"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "오예준",
    "subOwner": "김도윤",
    "ownerEmail": "yjoh@company.com",
    "plannedStart": "2026-08-23T09:00",
    "plannedEnd": "2026-08-23T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0287",
    "phase": "4단계 - 통합테스트",
    "system": "채널계",
    "work": "통합테스트",
    "item": "채널계 통합테스트",
    "task": "채널계 통합테스트 - 2차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0286"
    ],
    "successor": [
      "MIG-0288"
    ],
    "deliverable": "2차 검증 결과서",
    "owner": "김도윤",
    "subOwner": "이서연",
    "ownerEmail": "dykim@company.com",
    "plannedStart": "2026-08-24T09:00",
    "plannedEnd": "2026-08-24T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0288",
    "phase": "4단계 - 통합테스트",
    "system": "채널계",
    "work": "통합테스트",
    "item": "채널계 통합테스트",
    "task": "채널계 통합테스트 - 성능/부하 확인",
    "critical": false,
    "predecessor": [
      "MIG-0287"
    ],
    "successor": [
      "MIG-0289"
    ],
    "deliverable": "성능/부하 확인 결과서",
    "owner": "김도윤",
    "subOwner": "이서연",
    "ownerEmail": "dykim@company.com",
    "plannedStart": "2026-08-25T09:00",
    "plannedEnd": "2026-08-25T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0289",
    "phase": "4단계 - 통합테스트",
    "system": "채널계",
    "work": "통합테스트",
    "item": "채널계 통합테스트",
    "task": "채널계 통합테스트 - 최종 리허설",
    "critical": false,
    "predecessor": [
      "MIG-0288"
    ],
    "successor": [
      "MIG-0290"
    ],
    "deliverable": "최종 리허설 결과서",
    "owner": "김도윤",
    "subOwner": "이서연",
    "ownerEmail": "dykim@company.com",
    "plannedStart": "2026-08-26T09:00",
    "plannedEnd": "2026-08-26T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0290",
    "phase": "4단계 - 통합테스트",
    "system": "채널계",
    "work": "통합테스트",
    "item": "채널계 통합테스트",
    "task": "채널계 통합테스트 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0289"
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
    "id": "MIG-0291",
    "phase": "5단계 - 전환리허설",
    "system": "채널계",
    "work": "전환리허설",
    "item": "채널계 전환리허설",
    "task": "채널계 전환리허설 - 착수 및 요건 확인",
    "critical": false,
    "predecessor": null,
    "successor": [
      "MIG-0292"
    ],
    "deliverable": "착수 및 요건 확인 결과서",
    "owner": "오예준",
    "subOwner": "김도윤",
    "ownerEmail": "yjoh@company.com",
    "plannedStart": "2026-08-18T09:00",
    "plannedEnd": "2026-08-18T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0292",
    "phase": "5단계 - 전환리허설",
    "system": "채널계",
    "work": "전환리허설",
    "item": "채널계 전환리허설",
    "task": "채널계 전환리허설 - 상세 설계",
    "critical": false,
    "predecessor": [
      "MIG-0291"
    ],
    "successor": [
      "MIG-0293"
    ],
    "deliverable": "상세 설계 결과서",
    "owner": "오예준",
    "subOwner": "김도윤",
    "ownerEmail": "yjoh@company.com",
    "plannedStart": "2026-08-19T09:00",
    "plannedEnd": "2026-08-19T18:00",
    "actualStart": "2026-08-19T09:00",
    "actualEnd": "2026-08-19T18:00",
    "status": "완료"
  },
  {
    "id": "MIG-0293",
    "phase": "5단계 - 전환리허설",
    "system": "채널계",
    "work": "전환리허설",
    "item": "채널계 전환리허설",
    "task": "채널계 전환리허설 - 개발/구성 착수",
    "critical": false,
    "predecessor": [
      "MIG-0292"
    ],
    "successor": [
      "MIG-0294"
    ],
    "deliverable": "개발/구성 착수 결과서",
    "owner": "오예준",
    "subOwner": "김도윤",
    "ownerEmail": "yjoh@company.com",
    "plannedStart": "2026-08-20T09:00",
    "plannedEnd": "2026-08-20T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0294",
    "phase": "5단계 - 전환리허설",
    "system": "채널계",
    "work": "전환리허설",
    "item": "채널계 전환리허설",
    "task": "채널계 전환리허설 - 1차 구현 완료",
    "critical": false,
    "predecessor": [
      "MIG-0293"
    ],
    "successor": [
      "MIG-0295"
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
    "id": "MIG-0295",
    "phase": "5단계 - 전환리허설",
    "system": "채널계",
    "work": "전환리허설",
    "item": "채널계 전환리허설",
    "task": "채널계 전환리허설 - 1차 검토",
    "critical": false,
    "predecessor": [
      "MIG-0294"
    ],
    "successor": [
      "MIG-0296"
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
    "id": "MIG-0296",
    "phase": "5단계 - 전환리허설",
    "system": "채널계",
    "work": "전환리허설",
    "item": "채널계 전환리허설",
    "task": "채널계 전환리허설 - 보완 조치",
    "critical": false,
    "predecessor": [
      "MIG-0295"
    ],
    "successor": [
      "MIG-0297"
    ],
    "deliverable": "보완 조치 결과서",
    "owner": "김도윤",
    "subOwner": "이서연",
    "ownerEmail": "dykim@company.com",
    "plannedStart": "2026-08-23T09:00",
    "plannedEnd": "2026-08-23T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "예정"
  },
  {
    "id": "MIG-0297",
    "phase": "5단계 - 전환리허설",
    "system": "채널계",
    "work": "전환리허설",
    "item": "채널계 전환리허설",
    "task": "채널계 전환리허설 - 2차 검증",
    "critical": false,
    "predecessor": [
      "MIG-0296"
    ],
    "successor": [
      "MIG-0298"
    ],
    "deliverable": "2차 검증 결과서",
    "owner": "이서연",
    "subOwner": "박민재",
    "ownerEmail": "sylee@company.com",
    "plannedStart": "2026-08-24T09:00",
    "plannedEnd": "2026-08-24T18:00",
    "actualStart": "2026-08-24T09:00",
    "actualEnd": null,
    "status": "진행중"
  },
  {
    "id": "MIG-0298",
    "phase": "5단계 - 전환리허설",
    "system": "채널계",
    "work": "전환리허설",
    "item": "채널계 전환리허설",
    "task": "채널계 전환리허설 - 성능/부하 확인",
    "critical": false,
    "predecessor": [
      "MIG-0297"
    ],
    "successor": [
      "MIG-0299"
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
    "id": "MIG-0299",
    "phase": "5단계 - 전환리허설",
    "system": "채널계",
    "work": "전환리허설",
    "item": "채널계 전환리허설",
    "task": "채널계 전환리허설 - 최종 리허설",
    "critical": false,
    "predecessor": [
      "MIG-0298"
    ],
    "successor": [
      "MIG-0300"
    ],
    "deliverable": "최종 리허설 결과서",
    "owner": "이서연",
    "subOwner": "박민재",
    "ownerEmail": "sylee@company.com",
    "plannedStart": "2026-08-26T09:00",
    "plannedEnd": "2026-08-26T18:00",
    "actualStart": null,
    "actualEnd": null,
    "status": "지연"
  },
  {
    "id": "MIG-0300",
    "phase": "5단계 - 전환리허설",
    "system": "채널계",
    "work": "전환리허설",
    "item": "채널계 전환리허설",
    "task": "채널계 전환리허설 - 완료 보고",
    "critical": false,
    "predecessor": [
      "MIG-0299"
    ],
    "successor": [],
    "deliverable": "완료 보고 결과서",
    "owner": "박민재",
    "subOwner": "최지훈",
    "ownerEmail": "mjpark@company.com",
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
