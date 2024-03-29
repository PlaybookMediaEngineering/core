// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package dal

import (
	"context"
	"strings"

	social_servicev2 "github.com/PlaybookMediaEngineering/core/core-library/pkg/generated/social_service/v2"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"gorm.io/gorm/schema"

	"gorm.io/gen"
	"gorm.io/gen/field"
	"gorm.io/gen/helper"

	"gorm.io/plugin/dbresolver"
)

func newStripeSubscriptionORM(db *gorm.DB, opts ...gen.DOOption) stripeSubscriptionORM {
	_stripeSubscriptionORM := stripeSubscriptionORM{}

	_stripeSubscriptionORM.stripeSubscriptionORMDo.UseDB(db, opts...)
	_stripeSubscriptionORM.stripeSubscriptionORMDo.UseModel(&social_servicev2.StripeSubscriptionORM{})

	tableName := _stripeSubscriptionORM.stripeSubscriptionORMDo.TableName()
	_stripeSubscriptionORM.ALL = field.NewAsterisk(tableName)
	_stripeSubscriptionORM.Id = field.NewUint64(tableName, "id")
	_stripeSubscriptionORM.IsTrialing = field.NewBool(tableName, "is_trialing")
	_stripeSubscriptionORM.StripeSubscriptionActiveUntil = field.NewString(tableName, "stripe_subscription_active_until")
	_stripeSubscriptionORM.StripeSubscriptionId = field.NewString(tableName, "stripe_subscription_id")
	_stripeSubscriptionORM.StripeSubscriptionStatus = field.NewString(tableName, "stripe_subscription_status")
	_stripeSubscriptionORM.StripeWebhookLatestTimestamp = field.NewString(tableName, "stripe_webhook_latest_timestamp")
	_stripeSubscriptionORM.VirtualProfileId = field.NewUint64(tableName, "virtual_profile_id")

	_stripeSubscriptionORM.fillFieldMap()

	return _stripeSubscriptionORM
}

type stripeSubscriptionORM struct {
	stripeSubscriptionORMDo

	ALL                           field.Asterisk
	Id                            field.Uint64
	IsTrialing                    field.Bool
	StripeSubscriptionActiveUntil field.String
	StripeSubscriptionId          field.String
	StripeSubscriptionStatus      field.String
	StripeWebhookLatestTimestamp  field.String
	VirtualProfileId              field.Uint64

	fieldMap map[string]field.Expr
}

func (s stripeSubscriptionORM) Table(newTableName string) *stripeSubscriptionORM {
	s.stripeSubscriptionORMDo.UseTable(newTableName)
	return s.updateTableName(newTableName)
}

func (s stripeSubscriptionORM) As(alias string) *stripeSubscriptionORM {
	s.stripeSubscriptionORMDo.DO = *(s.stripeSubscriptionORMDo.As(alias).(*gen.DO))
	return s.updateTableName(alias)
}

func (s *stripeSubscriptionORM) updateTableName(table string) *stripeSubscriptionORM {
	s.ALL = field.NewAsterisk(table)
	s.Id = field.NewUint64(table, "id")
	s.IsTrialing = field.NewBool(table, "is_trialing")
	s.StripeSubscriptionActiveUntil = field.NewString(table, "stripe_subscription_active_until")
	s.StripeSubscriptionId = field.NewString(table, "stripe_subscription_id")
	s.StripeSubscriptionStatus = field.NewString(table, "stripe_subscription_status")
	s.StripeWebhookLatestTimestamp = field.NewString(table, "stripe_webhook_latest_timestamp")
	s.VirtualProfileId = field.NewUint64(table, "virtual_profile_id")

	s.fillFieldMap()

	return s
}

func (s *stripeSubscriptionORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := s.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (s *stripeSubscriptionORM) fillFieldMap() {
	s.fieldMap = make(map[string]field.Expr, 7)
	s.fieldMap["id"] = s.Id
	s.fieldMap["is_trialing"] = s.IsTrialing
	s.fieldMap["stripe_subscription_active_until"] = s.StripeSubscriptionActiveUntil
	s.fieldMap["stripe_subscription_id"] = s.StripeSubscriptionId
	s.fieldMap["stripe_subscription_status"] = s.StripeSubscriptionStatus
	s.fieldMap["stripe_webhook_latest_timestamp"] = s.StripeWebhookLatestTimestamp
	s.fieldMap["virtual_profile_id"] = s.VirtualProfileId
}

func (s stripeSubscriptionORM) clone(db *gorm.DB) stripeSubscriptionORM {
	s.stripeSubscriptionORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return s
}

func (s stripeSubscriptionORM) replaceDB(db *gorm.DB) stripeSubscriptionORM {
	s.stripeSubscriptionORMDo.ReplaceDB(db)
	return s
}

type stripeSubscriptionORMDo struct{ gen.DO }

type IStripeSubscriptionORMDo interface {
	gen.SubQuery
	Debug() IStripeSubscriptionORMDo
	WithContext(ctx context.Context) IStripeSubscriptionORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IStripeSubscriptionORMDo
	WriteDB() IStripeSubscriptionORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IStripeSubscriptionORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IStripeSubscriptionORMDo
	Not(conds ...gen.Condition) IStripeSubscriptionORMDo
	Or(conds ...gen.Condition) IStripeSubscriptionORMDo
	Select(conds ...field.Expr) IStripeSubscriptionORMDo
	Where(conds ...gen.Condition) IStripeSubscriptionORMDo
	Order(conds ...field.Expr) IStripeSubscriptionORMDo
	Distinct(cols ...field.Expr) IStripeSubscriptionORMDo
	Omit(cols ...field.Expr) IStripeSubscriptionORMDo
	Join(table schema.Tabler, on ...field.Expr) IStripeSubscriptionORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IStripeSubscriptionORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) IStripeSubscriptionORMDo
	Group(cols ...field.Expr) IStripeSubscriptionORMDo
	Having(conds ...gen.Condition) IStripeSubscriptionORMDo
	Limit(limit int) IStripeSubscriptionORMDo
	Offset(offset int) IStripeSubscriptionORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IStripeSubscriptionORMDo
	Unscoped() IStripeSubscriptionORMDo
	Create(values ...*social_servicev2.StripeSubscriptionORM) error
	CreateInBatches(values []*social_servicev2.StripeSubscriptionORM, batchSize int) error
	Save(values ...*social_servicev2.StripeSubscriptionORM) error
	First() (*social_servicev2.StripeSubscriptionORM, error)
	Take() (*social_servicev2.StripeSubscriptionORM, error)
	Last() (*social_servicev2.StripeSubscriptionORM, error)
	Find() ([]*social_servicev2.StripeSubscriptionORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*social_servicev2.StripeSubscriptionORM, err error)
	FindInBatches(result *[]*social_servicev2.StripeSubscriptionORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*social_servicev2.StripeSubscriptionORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IStripeSubscriptionORMDo
	Assign(attrs ...field.AssignExpr) IStripeSubscriptionORMDo
	Joins(fields ...field.RelationField) IStripeSubscriptionORMDo
	Preload(fields ...field.RelationField) IStripeSubscriptionORMDo
	FirstOrInit() (*social_servicev2.StripeSubscriptionORM, error)
	FirstOrCreate() (*social_servicev2.StripeSubscriptionORM, error)
	FindByPage(offset int, limit int) (result []*social_servicev2.StripeSubscriptionORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IStripeSubscriptionORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result social_servicev2.StripeSubscriptionORM, err error)
	GetRecordByIDs(ids []int) (result []social_servicev2.StripeSubscriptionORM, err error)
	CreateRecord(item social_servicev2.StripeSubscriptionORM) (err error)
	UpdateRecordByID(id int, item social_servicev2.StripeSubscriptionORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []social_servicev2.StripeSubscriptionORM, err error)
	CountAll() (result int, err error)
	GetByID(id uint64) (result social_servicev2.StripeSubscriptionORM, err error)
	GetByIDs(ids []uint64) (result []social_servicev2.StripeSubscriptionORM, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (s stripeSubscriptionORMDo) GetRecordByID(id int) (result social_servicev2.StripeSubscriptionORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM stripe_subscriptions ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (s stripeSubscriptionORMDo) GetRecordByIDs(ids []int) (result []social_servicev2.StripeSubscriptionORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM stripe_subscriptions ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// INSERT INTO @@table (columns) VALUES (values)
func (s stripeSubscriptionORMDo) CreateRecord(item social_servicev2.StripeSubscriptionORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO stripe_subscriptions (columns) VALUES (values) ")

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Exec(generateSQL.String()) // ignore_security_alert
	err = executeSQL.Error

	return
}

// UPDATE @@table SET columns=values
// {{where}}
//
//	id=@id
//
// {{end}}
func (s stripeSubscriptionORMDo) UpdateRecordByID(id int, item social_servicev2.StripeSubscriptionORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE stripe_subscriptions SET columns=values ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// DELETE FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (s stripeSubscriptionORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM stripe_subscriptions ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// ORDER BY @@orderColumn
func (s stripeSubscriptionORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []social_servicev2.StripeSubscriptionORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM stripe_subscriptions ORDER BY " + s.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (s stripeSubscriptionORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM stripe_subscriptions ")

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Raw(generateSQL.String()).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (s stripeSubscriptionORMDo) GetByID(id uint64) (result social_servicev2.StripeSubscriptionORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM stripe_subscriptions ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (s stripeSubscriptionORMDo) GetByIDs(ids []uint64) (result []social_servicev2.StripeSubscriptionORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM stripe_subscriptions ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (s stripeSubscriptionORMDo) Debug() IStripeSubscriptionORMDo {
	return s.withDO(s.DO.Debug())
}

func (s stripeSubscriptionORMDo) WithContext(ctx context.Context) IStripeSubscriptionORMDo {
	return s.withDO(s.DO.WithContext(ctx))
}

func (s stripeSubscriptionORMDo) ReadDB() IStripeSubscriptionORMDo {
	return s.Clauses(dbresolver.Read)
}

func (s stripeSubscriptionORMDo) WriteDB() IStripeSubscriptionORMDo {
	return s.Clauses(dbresolver.Write)
}

func (s stripeSubscriptionORMDo) Session(config *gorm.Session) IStripeSubscriptionORMDo {
	return s.withDO(s.DO.Session(config))
}

func (s stripeSubscriptionORMDo) Clauses(conds ...clause.Expression) IStripeSubscriptionORMDo {
	return s.withDO(s.DO.Clauses(conds...))
}

func (s stripeSubscriptionORMDo) Returning(value interface{}, columns ...string) IStripeSubscriptionORMDo {
	return s.withDO(s.DO.Returning(value, columns...))
}

func (s stripeSubscriptionORMDo) Not(conds ...gen.Condition) IStripeSubscriptionORMDo {
	return s.withDO(s.DO.Not(conds...))
}

func (s stripeSubscriptionORMDo) Or(conds ...gen.Condition) IStripeSubscriptionORMDo {
	return s.withDO(s.DO.Or(conds...))
}

func (s stripeSubscriptionORMDo) Select(conds ...field.Expr) IStripeSubscriptionORMDo {
	return s.withDO(s.DO.Select(conds...))
}

func (s stripeSubscriptionORMDo) Where(conds ...gen.Condition) IStripeSubscriptionORMDo {
	return s.withDO(s.DO.Where(conds...))
}

func (s stripeSubscriptionORMDo) Order(conds ...field.Expr) IStripeSubscriptionORMDo {
	return s.withDO(s.DO.Order(conds...))
}

func (s stripeSubscriptionORMDo) Distinct(cols ...field.Expr) IStripeSubscriptionORMDo {
	return s.withDO(s.DO.Distinct(cols...))
}

func (s stripeSubscriptionORMDo) Omit(cols ...field.Expr) IStripeSubscriptionORMDo {
	return s.withDO(s.DO.Omit(cols...))
}

func (s stripeSubscriptionORMDo) Join(table schema.Tabler, on ...field.Expr) IStripeSubscriptionORMDo {
	return s.withDO(s.DO.Join(table, on...))
}

func (s stripeSubscriptionORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) IStripeSubscriptionORMDo {
	return s.withDO(s.DO.LeftJoin(table, on...))
}

func (s stripeSubscriptionORMDo) RightJoin(table schema.Tabler, on ...field.Expr) IStripeSubscriptionORMDo {
	return s.withDO(s.DO.RightJoin(table, on...))
}

func (s stripeSubscriptionORMDo) Group(cols ...field.Expr) IStripeSubscriptionORMDo {
	return s.withDO(s.DO.Group(cols...))
}

func (s stripeSubscriptionORMDo) Having(conds ...gen.Condition) IStripeSubscriptionORMDo {
	return s.withDO(s.DO.Having(conds...))
}

func (s stripeSubscriptionORMDo) Limit(limit int) IStripeSubscriptionORMDo {
	return s.withDO(s.DO.Limit(limit))
}

func (s stripeSubscriptionORMDo) Offset(offset int) IStripeSubscriptionORMDo {
	return s.withDO(s.DO.Offset(offset))
}

func (s stripeSubscriptionORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IStripeSubscriptionORMDo {
	return s.withDO(s.DO.Scopes(funcs...))
}

func (s stripeSubscriptionORMDo) Unscoped() IStripeSubscriptionORMDo {
	return s.withDO(s.DO.Unscoped())
}

func (s stripeSubscriptionORMDo) Create(values ...*social_servicev2.StripeSubscriptionORM) error {
	if len(values) == 0 {
		return nil
	}
	return s.DO.Create(values)
}

func (s stripeSubscriptionORMDo) CreateInBatches(values []*social_servicev2.StripeSubscriptionORM, batchSize int) error {
	return s.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (s stripeSubscriptionORMDo) Save(values ...*social_servicev2.StripeSubscriptionORM) error {
	if len(values) == 0 {
		return nil
	}
	return s.DO.Save(values)
}

func (s stripeSubscriptionORMDo) First() (*social_servicev2.StripeSubscriptionORM, error) {
	if result, err := s.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*social_servicev2.StripeSubscriptionORM), nil
	}
}

func (s stripeSubscriptionORMDo) Take() (*social_servicev2.StripeSubscriptionORM, error) {
	if result, err := s.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*social_servicev2.StripeSubscriptionORM), nil
	}
}

func (s stripeSubscriptionORMDo) Last() (*social_servicev2.StripeSubscriptionORM, error) {
	if result, err := s.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*social_servicev2.StripeSubscriptionORM), nil
	}
}

func (s stripeSubscriptionORMDo) Find() ([]*social_servicev2.StripeSubscriptionORM, error) {
	result, err := s.DO.Find()
	return result.([]*social_servicev2.StripeSubscriptionORM), err
}

func (s stripeSubscriptionORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*social_servicev2.StripeSubscriptionORM, err error) {
	buf := make([]*social_servicev2.StripeSubscriptionORM, 0, batchSize)
	err = s.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (s stripeSubscriptionORMDo) FindInBatches(result *[]*social_servicev2.StripeSubscriptionORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return s.DO.FindInBatches(result, batchSize, fc)
}

func (s stripeSubscriptionORMDo) Attrs(attrs ...field.AssignExpr) IStripeSubscriptionORMDo {
	return s.withDO(s.DO.Attrs(attrs...))
}

func (s stripeSubscriptionORMDo) Assign(attrs ...field.AssignExpr) IStripeSubscriptionORMDo {
	return s.withDO(s.DO.Assign(attrs...))
}

func (s stripeSubscriptionORMDo) Joins(fields ...field.RelationField) IStripeSubscriptionORMDo {
	for _, _f := range fields {
		s = *s.withDO(s.DO.Joins(_f))
	}
	return &s
}

func (s stripeSubscriptionORMDo) Preload(fields ...field.RelationField) IStripeSubscriptionORMDo {
	for _, _f := range fields {
		s = *s.withDO(s.DO.Preload(_f))
	}
	return &s
}

func (s stripeSubscriptionORMDo) FirstOrInit() (*social_servicev2.StripeSubscriptionORM, error) {
	if result, err := s.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*social_servicev2.StripeSubscriptionORM), nil
	}
}

func (s stripeSubscriptionORMDo) FirstOrCreate() (*social_servicev2.StripeSubscriptionORM, error) {
	if result, err := s.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*social_servicev2.StripeSubscriptionORM), nil
	}
}

func (s stripeSubscriptionORMDo) FindByPage(offset int, limit int) (result []*social_servicev2.StripeSubscriptionORM, count int64, err error) {
	result, err = s.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = s.Offset(-1).Limit(-1).Count()
	return
}

func (s stripeSubscriptionORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = s.Count()
	if err != nil {
		return
	}

	err = s.Offset(offset).Limit(limit).Scan(result)
	return
}

func (s stripeSubscriptionORMDo) Scan(result interface{}) (err error) {
	return s.DO.Scan(result)
}

func (s stripeSubscriptionORMDo) Delete(models ...*social_servicev2.StripeSubscriptionORM) (result gen.ResultInfo, err error) {
	return s.DO.Delete(models)
}

func (s *stripeSubscriptionORMDo) withDO(do gen.Dao) *stripeSubscriptionORMDo {
	s.DO = *do.(*gen.DO)
	return s
}
