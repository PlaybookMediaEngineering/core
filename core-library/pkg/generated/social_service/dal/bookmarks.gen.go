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

func newBookmarkORM(db *gorm.DB, opts ...gen.DOOption) bookmarkORM {
	_bookmarkORM := bookmarkORM{}

	_bookmarkORM.bookmarkORMDo.UseDB(db, opts...)
	_bookmarkORM.bookmarkORMDo.UseModel(&social_servicev2.BookmarkORM{})

	tableName := _bookmarkORM.bookmarkORMDo.TableName()
	_bookmarkORM.ALL = field.NewAsterisk(tableName)
	_bookmarkORM.Id = field.NewUint64(tableName, "id")
	_bookmarkORM.PostIds = field.NewField(tableName, "post_ids")
	_bookmarkORM.Publications = bookmarkORMHasManyPublications{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("Publications", "social_servicev2.PublicationORM"),
		Admin: struct {
			field.RelationField
			Bookmarks struct {
				field.RelationField
				Publications struct {
					field.RelationField
				}
			}
			Tags struct {
				field.RelationField
			}
		}{
			RelationField: field.NewRelation("Publications.Admin", "social_servicev2.UserProfileORM"),
			Bookmarks: struct {
				field.RelationField
				Publications struct {
					field.RelationField
				}
			}{
				RelationField: field.NewRelation("Publications.Admin.Bookmarks", "social_servicev2.BookmarkORM"),
				Publications: struct {
					field.RelationField
				}{
					RelationField: field.NewRelation("Publications.Admin.Bookmarks.Publications", "social_servicev2.PublicationORM"),
				},
			},
			Tags: struct {
				field.RelationField
			}{
				RelationField: field.NewRelation("Publications.Admin.Tags", "social_servicev2.UserTagsORM"),
			},
		},
		Editors: struct {
			field.RelationField
		}{
			RelationField: field.NewRelation("Publications.Editors", "social_servicev2.UserProfileORM"),
		},
	}

	_bookmarkORM.fillFieldMap()

	return _bookmarkORM
}

type bookmarkORM struct {
	bookmarkORMDo

	ALL          field.Asterisk
	Id           field.Uint64
	PostIds      field.Field
	Publications bookmarkORMHasManyPublications

	fieldMap map[string]field.Expr
}

func (b bookmarkORM) Table(newTableName string) *bookmarkORM {
	b.bookmarkORMDo.UseTable(newTableName)
	return b.updateTableName(newTableName)
}

func (b bookmarkORM) As(alias string) *bookmarkORM {
	b.bookmarkORMDo.DO = *(b.bookmarkORMDo.As(alias).(*gen.DO))
	return b.updateTableName(alias)
}

func (b *bookmarkORM) updateTableName(table string) *bookmarkORM {
	b.ALL = field.NewAsterisk(table)
	b.Id = field.NewUint64(table, "id")
	b.PostIds = field.NewField(table, "post_ids")

	b.fillFieldMap()

	return b
}

func (b *bookmarkORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := b.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (b *bookmarkORM) fillFieldMap() {
	b.fieldMap = make(map[string]field.Expr, 3)
	b.fieldMap["id"] = b.Id
	b.fieldMap["post_ids"] = b.PostIds

}

func (b bookmarkORM) clone(db *gorm.DB) bookmarkORM {
	b.bookmarkORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return b
}

func (b bookmarkORM) replaceDB(db *gorm.DB) bookmarkORM {
	b.bookmarkORMDo.ReplaceDB(db)
	return b
}

type bookmarkORMHasManyPublications struct {
	db *gorm.DB

	field.RelationField

	Admin struct {
		field.RelationField
		Bookmarks struct {
			field.RelationField
			Publications struct {
				field.RelationField
			}
		}
		Tags struct {
			field.RelationField
		}
	}
	Editors struct {
		field.RelationField
	}
}

func (a bookmarkORMHasManyPublications) Where(conds ...field.Expr) *bookmarkORMHasManyPublications {
	if len(conds) == 0 {
		return &a
	}

	exprs := make([]clause.Expression, 0, len(conds))
	for _, cond := range conds {
		exprs = append(exprs, cond.BeCond().(clause.Expression))
	}
	a.db = a.db.Clauses(clause.Where{Exprs: exprs})
	return &a
}

func (a bookmarkORMHasManyPublications) WithContext(ctx context.Context) *bookmarkORMHasManyPublications {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a bookmarkORMHasManyPublications) Session(session *gorm.Session) *bookmarkORMHasManyPublications {
	a.db = a.db.Session(session)
	return &a
}

func (a bookmarkORMHasManyPublications) Model(m *social_servicev2.BookmarkORM) *bookmarkORMHasManyPublicationsTx {
	return &bookmarkORMHasManyPublicationsTx{a.db.Model(m).Association(a.Name())}
}

type bookmarkORMHasManyPublicationsTx struct{ tx *gorm.Association }

func (a bookmarkORMHasManyPublicationsTx) Find() (result []*social_servicev2.PublicationORM, err error) {
	return result, a.tx.Find(&result)
}

func (a bookmarkORMHasManyPublicationsTx) Append(values ...*social_servicev2.PublicationORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a bookmarkORMHasManyPublicationsTx) Replace(values ...*social_servicev2.PublicationORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a bookmarkORMHasManyPublicationsTx) Delete(values ...*social_servicev2.PublicationORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a bookmarkORMHasManyPublicationsTx) Clear() error {
	return a.tx.Clear()
}

func (a bookmarkORMHasManyPublicationsTx) Count() int64 {
	return a.tx.Count()
}

type bookmarkORMDo struct{ gen.DO }

type IBookmarkORMDo interface {
	gen.SubQuery
	Debug() IBookmarkORMDo
	WithContext(ctx context.Context) IBookmarkORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IBookmarkORMDo
	WriteDB() IBookmarkORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IBookmarkORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IBookmarkORMDo
	Not(conds ...gen.Condition) IBookmarkORMDo
	Or(conds ...gen.Condition) IBookmarkORMDo
	Select(conds ...field.Expr) IBookmarkORMDo
	Where(conds ...gen.Condition) IBookmarkORMDo
	Order(conds ...field.Expr) IBookmarkORMDo
	Distinct(cols ...field.Expr) IBookmarkORMDo
	Omit(cols ...field.Expr) IBookmarkORMDo
	Join(table schema.Tabler, on ...field.Expr) IBookmarkORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IBookmarkORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) IBookmarkORMDo
	Group(cols ...field.Expr) IBookmarkORMDo
	Having(conds ...gen.Condition) IBookmarkORMDo
	Limit(limit int) IBookmarkORMDo
	Offset(offset int) IBookmarkORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IBookmarkORMDo
	Unscoped() IBookmarkORMDo
	Create(values ...*social_servicev2.BookmarkORM) error
	CreateInBatches(values []*social_servicev2.BookmarkORM, batchSize int) error
	Save(values ...*social_servicev2.BookmarkORM) error
	First() (*social_servicev2.BookmarkORM, error)
	Take() (*social_servicev2.BookmarkORM, error)
	Last() (*social_servicev2.BookmarkORM, error)
	Find() ([]*social_servicev2.BookmarkORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*social_servicev2.BookmarkORM, err error)
	FindInBatches(result *[]*social_servicev2.BookmarkORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*social_servicev2.BookmarkORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IBookmarkORMDo
	Assign(attrs ...field.AssignExpr) IBookmarkORMDo
	Joins(fields ...field.RelationField) IBookmarkORMDo
	Preload(fields ...field.RelationField) IBookmarkORMDo
	FirstOrInit() (*social_servicev2.BookmarkORM, error)
	FirstOrCreate() (*social_servicev2.BookmarkORM, error)
	FindByPage(offset int, limit int) (result []*social_servicev2.BookmarkORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IBookmarkORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result social_servicev2.BookmarkORM, err error)
	GetRecordByIDs(ids []int) (result []social_servicev2.BookmarkORM, err error)
	CreateRecord(item social_servicev2.BookmarkORM) (err error)
	UpdateRecordByID(id int, item social_servicev2.BookmarkORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []social_servicev2.BookmarkORM, err error)
	CountAll() (result int, err error)
	GetByID(id uint64) (result social_servicev2.BookmarkORM, err error)
	GetByIDs(ids []uint64) (result []social_servicev2.BookmarkORM, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (b bookmarkORMDo) GetRecordByID(id int) (result social_servicev2.BookmarkORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM bookmarks ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = b.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (b bookmarkORMDo) GetRecordByIDs(ids []int) (result []social_servicev2.BookmarkORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM bookmarks ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = b.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// INSERT INTO @@table (columns) VALUES (values)
func (b bookmarkORMDo) CreateRecord(item social_servicev2.BookmarkORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO bookmarks (columns) VALUES (values) ")

	var executeSQL *gorm.DB
	executeSQL = b.UnderlyingDB().Exec(generateSQL.String()) // ignore_security_alert
	err = executeSQL.Error

	return
}

// UPDATE @@table SET columns=values
// {{where}}
//
//	id=@id
//
// {{end}}
func (b bookmarkORMDo) UpdateRecordByID(id int, item social_servicev2.BookmarkORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE bookmarks SET columns=values ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = b.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// DELETE FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (b bookmarkORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM bookmarks ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = b.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// ORDER BY @@orderColumn
func (b bookmarkORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []social_servicev2.BookmarkORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM bookmarks ORDER BY " + b.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = b.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (b bookmarkORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM bookmarks ")

	var executeSQL *gorm.DB
	executeSQL = b.UnderlyingDB().Raw(generateSQL.String()).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (b bookmarkORMDo) GetByID(id uint64) (result social_servicev2.BookmarkORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM bookmarks ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = b.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (b bookmarkORMDo) GetByIDs(ids []uint64) (result []social_servicev2.BookmarkORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM bookmarks ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = b.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (b bookmarkORMDo) Debug() IBookmarkORMDo {
	return b.withDO(b.DO.Debug())
}

func (b bookmarkORMDo) WithContext(ctx context.Context) IBookmarkORMDo {
	return b.withDO(b.DO.WithContext(ctx))
}

func (b bookmarkORMDo) ReadDB() IBookmarkORMDo {
	return b.Clauses(dbresolver.Read)
}

func (b bookmarkORMDo) WriteDB() IBookmarkORMDo {
	return b.Clauses(dbresolver.Write)
}

func (b bookmarkORMDo) Session(config *gorm.Session) IBookmarkORMDo {
	return b.withDO(b.DO.Session(config))
}

func (b bookmarkORMDo) Clauses(conds ...clause.Expression) IBookmarkORMDo {
	return b.withDO(b.DO.Clauses(conds...))
}

func (b bookmarkORMDo) Returning(value interface{}, columns ...string) IBookmarkORMDo {
	return b.withDO(b.DO.Returning(value, columns...))
}

func (b bookmarkORMDo) Not(conds ...gen.Condition) IBookmarkORMDo {
	return b.withDO(b.DO.Not(conds...))
}

func (b bookmarkORMDo) Or(conds ...gen.Condition) IBookmarkORMDo {
	return b.withDO(b.DO.Or(conds...))
}

func (b bookmarkORMDo) Select(conds ...field.Expr) IBookmarkORMDo {
	return b.withDO(b.DO.Select(conds...))
}

func (b bookmarkORMDo) Where(conds ...gen.Condition) IBookmarkORMDo {
	return b.withDO(b.DO.Where(conds...))
}

func (b bookmarkORMDo) Order(conds ...field.Expr) IBookmarkORMDo {
	return b.withDO(b.DO.Order(conds...))
}

func (b bookmarkORMDo) Distinct(cols ...field.Expr) IBookmarkORMDo {
	return b.withDO(b.DO.Distinct(cols...))
}

func (b bookmarkORMDo) Omit(cols ...field.Expr) IBookmarkORMDo {
	return b.withDO(b.DO.Omit(cols...))
}

func (b bookmarkORMDo) Join(table schema.Tabler, on ...field.Expr) IBookmarkORMDo {
	return b.withDO(b.DO.Join(table, on...))
}

func (b bookmarkORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) IBookmarkORMDo {
	return b.withDO(b.DO.LeftJoin(table, on...))
}

func (b bookmarkORMDo) RightJoin(table schema.Tabler, on ...field.Expr) IBookmarkORMDo {
	return b.withDO(b.DO.RightJoin(table, on...))
}

func (b bookmarkORMDo) Group(cols ...field.Expr) IBookmarkORMDo {
	return b.withDO(b.DO.Group(cols...))
}

func (b bookmarkORMDo) Having(conds ...gen.Condition) IBookmarkORMDo {
	return b.withDO(b.DO.Having(conds...))
}

func (b bookmarkORMDo) Limit(limit int) IBookmarkORMDo {
	return b.withDO(b.DO.Limit(limit))
}

func (b bookmarkORMDo) Offset(offset int) IBookmarkORMDo {
	return b.withDO(b.DO.Offset(offset))
}

func (b bookmarkORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IBookmarkORMDo {
	return b.withDO(b.DO.Scopes(funcs...))
}

func (b bookmarkORMDo) Unscoped() IBookmarkORMDo {
	return b.withDO(b.DO.Unscoped())
}

func (b bookmarkORMDo) Create(values ...*social_servicev2.BookmarkORM) error {
	if len(values) == 0 {
		return nil
	}
	return b.DO.Create(values)
}

func (b bookmarkORMDo) CreateInBatches(values []*social_servicev2.BookmarkORM, batchSize int) error {
	return b.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (b bookmarkORMDo) Save(values ...*social_servicev2.BookmarkORM) error {
	if len(values) == 0 {
		return nil
	}
	return b.DO.Save(values)
}

func (b bookmarkORMDo) First() (*social_servicev2.BookmarkORM, error) {
	if result, err := b.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*social_servicev2.BookmarkORM), nil
	}
}

func (b bookmarkORMDo) Take() (*social_servicev2.BookmarkORM, error) {
	if result, err := b.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*social_servicev2.BookmarkORM), nil
	}
}

func (b bookmarkORMDo) Last() (*social_servicev2.BookmarkORM, error) {
	if result, err := b.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*social_servicev2.BookmarkORM), nil
	}
}

func (b bookmarkORMDo) Find() ([]*social_servicev2.BookmarkORM, error) {
	result, err := b.DO.Find()
	return result.([]*social_servicev2.BookmarkORM), err
}

func (b bookmarkORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*social_servicev2.BookmarkORM, err error) {
	buf := make([]*social_servicev2.BookmarkORM, 0, batchSize)
	err = b.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (b bookmarkORMDo) FindInBatches(result *[]*social_servicev2.BookmarkORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return b.DO.FindInBatches(result, batchSize, fc)
}

func (b bookmarkORMDo) Attrs(attrs ...field.AssignExpr) IBookmarkORMDo {
	return b.withDO(b.DO.Attrs(attrs...))
}

func (b bookmarkORMDo) Assign(attrs ...field.AssignExpr) IBookmarkORMDo {
	return b.withDO(b.DO.Assign(attrs...))
}

func (b bookmarkORMDo) Joins(fields ...field.RelationField) IBookmarkORMDo {
	for _, _f := range fields {
		b = *b.withDO(b.DO.Joins(_f))
	}
	return &b
}

func (b bookmarkORMDo) Preload(fields ...field.RelationField) IBookmarkORMDo {
	for _, _f := range fields {
		b = *b.withDO(b.DO.Preload(_f))
	}
	return &b
}

func (b bookmarkORMDo) FirstOrInit() (*social_servicev2.BookmarkORM, error) {
	if result, err := b.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*social_servicev2.BookmarkORM), nil
	}
}

func (b bookmarkORMDo) FirstOrCreate() (*social_servicev2.BookmarkORM, error) {
	if result, err := b.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*social_servicev2.BookmarkORM), nil
	}
}

func (b bookmarkORMDo) FindByPage(offset int, limit int) (result []*social_servicev2.BookmarkORM, count int64, err error) {
	result, err = b.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = b.Offset(-1).Limit(-1).Count()
	return
}

func (b bookmarkORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = b.Count()
	if err != nil {
		return
	}

	err = b.Offset(offset).Limit(limit).Scan(result)
	return
}

func (b bookmarkORMDo) Scan(result interface{}) (err error) {
	return b.DO.Scan(result)
}

func (b bookmarkORMDo) Delete(models ...*social_servicev2.BookmarkORM) (result gen.ResultInfo, err error) {
	return b.DO.Delete(models)
}

func (b *bookmarkORMDo) withDO(do gen.Dao) *bookmarkORMDo {
	b.DO = *do.(*gen.DO)
	return b
}
