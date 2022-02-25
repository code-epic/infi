--
-- INFI_TB_228_ENVIO_MAIL  (Table) 
--
CREATE TABLE ADM_INFI.INFI_TB_228_ENVIO_MAIL
(
  CORREO_ID          NUMBER(10)                 NOT NULL,
  PLANTILLA_MAIL_ID  NUMBER(4)                  NOT NULL,
  CLIENT_AREA_ID     NUMBER(8)                  NOT NULL,
  DIRECCION_CORREO   VARCHAR2(100 BYTE),
  STATUS             VARCHAR2(50 BYTE),
  CICLO_ID           NUMBER(7)                  NOT NULL,
  FECHA_REGISTRO     DATE,
  FECHA_ENVIO        DATE,
  ORDENE_ID          NUMBER(10),
  CONTENIDO          VARCHAR2(4000 BYTE)
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

COMMENT ON TABLE ADM_INFI.INFI_TB_228_ENVIO_MAIL IS 'Tabla contenedora de la informacion requerida para el envio de correos';

COMMENT ON COLUMN ADM_INFI.INFI_TB_228_ENVIO_MAIL.PLANTILLA_MAIL_ID IS 'ID de la plantilla de correo';

COMMENT ON COLUMN ADM_INFI.INFI_TB_228_ENVIO_MAIL.CLIENT_AREA_ID IS 'ID del cliente (Tipo destinatario = Cliente) o del area (Tipo destinatario = Funcional)';

COMMENT ON COLUMN ADM_INFI.INFI_TB_228_ENVIO_MAIL.DIRECCION_CORREO IS 'Direccion de correo';

COMMENT ON COLUMN ADM_INFI.INFI_TB_228_ENVIO_MAIL.STATUS IS 'Estatus del correo';

COMMENT ON COLUMN ADM_INFI.INFI_TB_228_ENVIO_MAIL.CICLO_ID IS 'ID del Ciclo';

COMMENT ON COLUMN ADM_INFI.INFI_TB_228_ENVIO_MAIL.FECHA_REGISTRO IS 'Fecha en la que se registra el correo';

COMMENT ON COLUMN ADM_INFI.INFI_TB_228_ENVIO_MAIL.FECHA_ENVIO IS 'Fecha en la que se envia el correo';

COMMENT ON COLUMN ADM_INFI.INFI_TB_228_ENVIO_MAIL.ORDENE_ID IS 'Id de la Orden relacionada con el envio (Tipo de destinatario = Cliente)';

COMMENT ON COLUMN ADM_INFI.INFI_TB_228_ENVIO_MAIL.CORREO_ID IS 'ID de correo';

--
-- INFI_TB_228_ENVIO_MAIL_PK  (Index) 
--
CREATE UNIQUE INDEX ADM_INFI.INFI_TB_228_ENVIO_MAIL_PK ON ADM_INFI.INFI_TB_228_ENVIO_MAIL
(CORREO_ID)
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
-- INFI_TB_228_CICLO_ID  (Index) 
--
CREATE INDEX ADM_INFI.INFI_TB_228_CICLO_ID ON ADM_INFI.INFI_TB_228_ENVIO_MAIL
(CICLO_ID)
LOGGING
TABLESPACE INDX
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
-- INFI_TB_228_ENVIO_MAIL  (Synonym) 
--
CREATE PUBLIC SYNONYM INFI_TB_228_ENVIO_MAIL FOR ADM_INFI.INFI_TB_228_ENVIO_MAIL;

GRANT DELETE ON  ADM_INFI.INFI_TB_228_ENVIO_MAIL TO USU_INFI;

GRANT INSERT ON  ADM_INFI.INFI_TB_228_ENVIO_MAIL TO USU_INFI;

GRANT SELECT ON  ADM_INFI.INFI_TB_228_ENVIO_MAIL TO USU_INFI;

GRANT UPDATE ON  ADM_INFI.INFI_TB_228_ENVIO_MAIL TO USU_INFI;

-- 
-- Non Foreign Key Constraints for Table INFI_TB_228_ENVIO_MAIL 
-- 
ALTER TABLE ADM_INFI.INFI_TB_228_ENVIO_MAIL ADD (
  CONSTRAINT PK_228
 PRIMARY KEY
 (CORREO_ID));


-- 
-- Foreign Key Constraints for Table INFI_TB_228_ENVIO_MAIL 
-- 
ALTER TABLE ADM_INFI.INFI_TB_228_ENVIO_MAIL ADD (
  CONSTRAINT FK_228_204 
 FOREIGN KEY (ORDENE_ID) 
 REFERENCES ADM_INFI.INFI_TB_204_ORDENES (ORDENE_ID));

ALTER TABLE ADM_INFI.INFI_TB_228_ENVIO_MAIL ADD (
  CONSTRAINT FK_228_223 
 FOREIGN KEY (PLANTILLA_MAIL_ID) 
 REFERENCES ADM_INFI.INFI_TB_223_PLANTILLA_MAIL (PLANTILLA_MAIL_ID));


