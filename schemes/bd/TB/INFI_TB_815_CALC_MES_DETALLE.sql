--
-- INFI_TB_815_CALC_MES_DETALLE  (Table) 
--
CREATE TABLE ADM_INFI.INFI_TB_815_CALC_MES_DETALLE
(
  REGISTRO_OP_ID           NUMBER(14)           NOT NULL,
  CALCULO_MES_ID           NUMBER(7)            NOT NULL,
  OPERACION_NOMBRE         VARCHAR2(50 BYTE)    NOT NULL,
  CANTIDAD                 NUMBER(13,2),
  TASA_MONTO               NUMBER(9,6),
  MONTO_OPERACION          NUMBER(15,5)         NOT NULL,
  MONEDA_ID                VARCHAR2(3 BYTE)     NOT NULL,
  TITULO_ID                VARCHAR2(25 BYTE),
  CODIGO_OPERACION         VARCHAR2(10 BYTE),
  CLIENT_ID                NUMBER(8),
  SIGNO_PORCENTAJE         NUMBER(1)            NOT NULL,
  FECHA_INICIO_PAGO_CUPON  DATE,
  FECHA_FIN_PAGO_CUPON     DATE,
  CANTIDAD_OPERACIONES     NUMBER(3)            DEFAULT 0,
  COMISION_OPERACION       NUMBER(15,5),
  DIAS_CALCULO             NUMBER(3)
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

COMMENT ON TABLE ADM_INFI.INFI_TB_815_CALC_MES_DETALLE IS 'Representa el detalle de los c�lculos efectuados para una determinada fecha con relaci�n a las comisiones que deben cobrarse al cliente o los pagos de cupones y amortizaciones que se deben cancelar';

COMMENT ON COLUMN ADM_INFI.INFI_TB_815_CALC_MES_DETALLE.REGISTRO_OP_ID IS 'Id que identifica de menera �nica el registro';

COMMENT ON COLUMN ADM_INFI.INFI_TB_815_CALC_MES_DETALLE.CALCULO_MES_ID IS 'Id de referencia del c�lculo del mes';

COMMENT ON COLUMN ADM_INFI.INFI_TB_815_CALC_MES_DETALLE.OPERACION_NOMBRE IS 'Nombre de la operaci�n generada';

COMMENT ON COLUMN ADM_INFI.INFI_TB_815_CALC_MES_DETALLE.CANTIDAD IS 'Indica el total de montos o cantidades calculadas en la transacci�n';

COMMENT ON COLUMN ADM_INFI.INFI_TB_815_CALC_MES_DETALLE.TASA_MONTO IS 'Indica la tasa o el monto fijo obtenido para obtener el monto de la operaci�n';

COMMENT ON COLUMN ADM_INFI.INFI_TB_815_CALC_MES_DETALLE.MONTO_OPERACION IS 'Monto de la operaci�n';

COMMENT ON COLUMN ADM_INFI.INFI_TB_815_CALC_MES_DETALLE.MONEDA_ID IS 'Moneda en que se encuentra la operaci�n';

COMMENT ON COLUMN ADM_INFI.INFI_TB_815_CALC_MES_DETALLE.TITULO_ID IS 'Id del t�tulo cuando el proceso es c�lculo de cupones o amortizaciones';

COMMENT ON COLUMN ADM_INFI.INFI_TB_815_CALC_MES_DETALLE.CODIGO_OPERACION IS 'C�digo de la operaci�n que debe enviarse s�lo a ALTAIR';

COMMENT ON COLUMN ADM_INFI.INFI_TB_815_CALC_MES_DETALLE.CLIENT_ID IS 'Id del cliente';

COMMENT ON COLUMN ADM_INFI.INFI_TB_815_CALC_MES_DETALLE.SIGNO_PORCENTAJE IS 'Indica si el campo tasa_monto debe mostrarse con signo de porcentaje';

COMMENT ON COLUMN ADM_INFI.INFI_TB_815_CALC_MES_DETALLE.FECHA_INICIO_PAGO_CUPON IS 'Fecha inicio del pago de cup�n';

COMMENT ON COLUMN ADM_INFI.INFI_TB_815_CALC_MES_DETALLE.FECHA_FIN_PAGO_CUPON IS 'Fecha fin del pago de cup�n';

--
-- PK_815  (Index) 
--
CREATE UNIQUE INDEX ADM_INFI.PK_815 ON ADM_INFI.INFI_TB_815_CALC_MES_DETALLE
(REGISTRO_OP_ID)
NOLOGGING
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
PARALLEL ( DEGREE 4 INSTANCES 1 );

--
-- INFI_TB_815_CALC_MES_DETALLE  (Synonym) 
--
CREATE PUBLIC SYNONYM INFI_TB_815_CALC_MES_DETALLE FOR ADM_INFI.INFI_TB_815_CALC_MES_DETALLE;

GRANT DELETE ON  ADM_INFI.INFI_TB_815_CALC_MES_DETALLE TO USU_INFI;

GRANT INSERT ON  ADM_INFI.INFI_TB_815_CALC_MES_DETALLE TO USU_INFI;

GRANT SELECT ON  ADM_INFI.INFI_TB_815_CALC_MES_DETALLE TO USU_INFI;

GRANT UPDATE ON  ADM_INFI.INFI_TB_815_CALC_MES_DETALLE TO USU_INFI;

-- 
-- Non Foreign Key Constraints for Table INFI_TB_815_CALC_MES_DETALLE 
-- 
ALTER TABLE ADM_INFI.INFI_TB_815_CALC_MES_DETALLE ADD (
  CONSTRAINT PK_815
 PRIMARY KEY
 (REGISTRO_OP_ID)
    USING INDEX 
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
               ));


-- 
-- Foreign Key Constraints for Table INFI_TB_815_CALC_MES_DETALLE 
-- 
ALTER TABLE ADM_INFI.INFI_TB_815_CALC_MES_DETALLE ADD (
  CONSTRAINT FK_815_814 
 FOREIGN KEY (CALCULO_MES_ID) 
 REFERENCES ADM_INFI.INFI_TB_814_CALC_MES (CALCULO_MES_ID)
    ON DELETE CASCADE);


