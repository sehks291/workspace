-- 이것은 주석입니다.
-- 하이픈 다음에 붙여쓰지 말 것.

-- 1일차 : 데이터 조회 기본 SQL
-- 데이터 조회 문법
-- 대소문자 구분 X ( 하지만 대부분 대문자로 작성 )
-- SELECT 조회할 열 FROM 테이블명 (WHERE 조건);

-- EMP 테이블의 사번, 이름, 급여 정보를 조회하는 쿼리
SELECT EMPNO, ENAME, SAL FROM emp;

-- EMP 테이블의 모든 정보를 조회하는 쿼리문
SELECT * FROM emp;

-- 별칭사용(컬럼명을 조회할 때 임의로 변경)
SELECT EMPNO AS 사번 FROM emp;
SELECT EMPNO AS 사번, ENAME 사원명 
FROM emp;

-- 조건에 맞는 데이터만 조회
-- 급여가 400 이상인 사원의 사번, 이름, 직급, 급여를 조회
-- 같다 : = , 다르다 : != , <>

SELECT EMPNO, ENAME, JOB, SAL 
FROM emp
WHERE SAL != 400;


-- 급여가 600 이하이고, 직급은 사원인 사람들의 사번, 이름, 직급, 급여를 조회
-- 그리고는 AND , 이거나 또는 OR

SELECT EMPNO, ENAME, JOB, SAL
FROM emp
WHERE SAL <= 600 AND JOB = '사원';


SELECT * FROM emp;


-- 커미션이 null 인 사원의 사번, 사원명, 커미션 조회
-- 조건에서 NULL 여부를 확인할 때는 주의 필요 ( IS, IS NOT )

SELECT EMPNO, ENAME, COMM
FROM emp
WHERE COMM IS NULL;
-- WHERE COMM IS NOT NULL;

-- 직급이 과장이 아닌 사원들 중 커미션을 받는 사원들의
-- 사번, 이름, 직급, 커미션 조회

SELECT EMPNO, ENAME, JOB, COMM
FROM emp
WHERE JOB != '과장' AND COMM >= 0;

-- 부서번호가 30번이 아닌 사원들 중에서 급여가 700 이하이고
-- 직급은 '사원'인 직원의 모든 정보를 조회

SELECT *
FROM emp
WHERE DEPTNO != 30 AND JOB = '사원' AND SAL <=700;

-- 급여가 400 이하이거나 700 이상인 사원 중
-- 직급이 과장이면서 커미션은 NULL인 직원들의
-- 사번, 사원명, 급여, 직급, 커미션을 조회
-- 단, 커미션은 인센티브라는 별칭을 사용하여 조회한다.

SELECT EMPNO, ENAME,
