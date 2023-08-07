interface getTypeParamProp {
  select?: string[];
  where?: {};
  relations?: string[];
  orderColumn?: string;
  order?: 'DESC' | 'ASC';
  page?: number;
  size?: number;
}

export const getTypeParams = ({select, where, orderColumn, order, relations, page, size = 20}: getTypeParamProp) => {
  let params;
  if (select) params = `${params ? `${params}&` : '?'}select=${JSON.stringify(select)}`;
  if (where) params = `${params ? `${params}&` : '?'}where=${JSON.stringify(where)}`;
  if (relations) params = `${params ? `${params}&` : '?'}relations=${JSON.stringify(relations)}`;
  if (orderColumn) params = `${params ? `${params}&` : '?'}orderColumn=${orderColumn}`;
  if (order) params = `${params ? `${params}&` : '?'}order=${order}`;
  if (page) params = `${params ? `${params}&` : '?'}take=${size}&skip=${size * page}`;

  return params;
};

// select: ["id", "name"]
// where: {id: 0},
// relations: ['categories', 'owner'],
// order: { id: 'DESC' },
// skip: size * page,
// take: size,
