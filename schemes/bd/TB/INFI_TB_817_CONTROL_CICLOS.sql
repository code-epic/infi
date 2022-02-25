--
-- INFI_TB_817_CONTROL_CICLOS  (Table) 
--
CREATE TABLE ADM_INFI.INFI_TB_817_CONTROL_CICLOS
(
  CICLO_ID            NUMBER(7),
  FECHA_INICIO        DATE                      NOT NULL,
  FECHA_CIERRE        DATE,
  NOMBRE              VARCHAR2(100 BYTE)        NOT NULL,
  EXTERNO             NUMBER(1)                 DEFAULT 0,
  TIPO                VARCHAR2(25 BYTE),
  USUARIO_REGISTRO    VARCHAR2(50 BYTE),
  USUARIO_APROBACION  VARCHAR2(50 BYTE),
  OBSERVACION         VARCHAR2(1000 BYTE),
  ESTATUS             VARCHAR2(50 BYTE)
)
TABLESPACE DATA
PCTUSED    0
PCTFREE    10
INITRANS   1
MAXTRANS   255
STORAGE    (
            INITIAL          64K
            NEXT             1M
            MINEXTENTS       1
            MAXEXTENTS       2147483645
            PCTINCREASE      0
            BUFFER_POOL      DEFAULT
           )
LOGGING 
NOCOMPRESS 
NOCACHE
NOPARALLEL
MONITORING;

COMMENT ON TABLE ADM_INFI.INFI_TB_817_CONTROL_CICLOS IS 'Contiene el registro de los ciclos creados';

COMMENT ON COLUMN ADM_INFI.INFI_TB_817_CONTROL_CICLOS.CICLO_ID IS 'Id del ciclo';

COMMENT ON COLUMN ADM_INFI.INFI_TB_817_CONTROL_CICLOS.FECHA_INICIO IS 'Fecha de apertura del ciclo';

COMMENT ON COLUMN ADM_INFI.INFI_TB_817_CONTROL_CICLOS.FECHA_CIERRE IS 'Fecha de cierre del ciclo';

COMMENT ON COLUMN ADM_INFI.INFI_TB_817_CONTROL_CICLOS.NOMBRE IS 'Nombre del ciclo';

COMMENT ON COLUMN ADM_INFI.INFI_TB_817_CONTROL_CICLOS.EXTERNO IS 'Indicador de ciclo externo al sistema. Valor 0=interno, Valor 1=externo';

COMMENT ON COLUMN ADM_INFI.INFI_TB_817_CONTROL_CICLOS.TIPO IS 'Tipo de ciclo';

COMMENT ON COLUMN ADM_INFI.INFI_TB_817_CONTROL_CICLOS.USUARIO_REGISTRO IS 'Usuario que apertura el ciclo';

COMMENT ON COLUMN ADM_INFI.INFI_TB_817_CONTROL_CICLOS.USUARIO_APROBACION IS 'Usuario que aprueba la apertura del ciclo';

COMMENT ON COLUMN ADM_INFI.INFI_TB_817_CONTROL_CICLOS.OBSERVACION IS 'Observaci�n sobre el ciclo';

COMMENT ON COLUMN ADM_INFI.INFI_TB_817_CONTROL_CICLOS.ESTATUS IS 'Estatus en el que se encuentra el ciclo';

--
-- INFI_TB_817_CONTROL_CICLOS_PK  (Index) 
--
CREATE UNIQUE INDEX ADM_INFI.INFI_TB_817_CONTROL_CICLOS_PK ON ADM_INFI.INFI_TB_817_CONTROL_CICLOS
(CICLO_ID)
LOGGING
TABLESPACE DATA
PCTFREE    10
INITRANS   2
MAXTRANS   255
STORAGE    (
            INITIAL          64K
            NEXT             1M
            MINEXTENTS       1
            MAXEXTENTS       2147483645
            PCTINCREASE      0
            BUFFER_POOL      DEFAULT
           )
NOPARALLEL;

--
-- INFI_TB_817_CONTROL_CICLOS  (Synonym) 
--
CREATE PUBLIC SYNONYM INFI_TB_817_CONTROL_CICLOS FOR ADM_INFI.INFI_TB_817_CONTROL_CICLOS;

GRANT DELETE ON  ADM_INFI.INFI_TB_817_CONTROL_CICLOS TO USU_INFI;

GRANT INSERT ON  ADM_INFI.INFI_TB_817_CONTROL_CICLOS TO USU_INFI;

GRANT SELECT ON  ADM_INFI.INFI_TB_817_CONTROL_CICLOS TO USU_INFI;

GRANT UPDATE ON  ADM_INFI.INFI_TB_817_CONTROL_CICLOS TO USU_INFI;

-- 
-- Non Foreign Key Constraints for Table INFI_TB_817_CONTROL_CICLOS 
-- 
ALTER TABLE ADM_INFI.INFI_TB_817_CONTROL_CICLOS ADD (
  CONSTRAINT PK_817
 PRIMARY KEY
 (CICLO_ID));

