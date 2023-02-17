import { Button, Card, Col, Divider, Dropdown, List, Menu, Modal, Row, Statistic, Table, Tag, Typography } from 'antd';
import { FC, useEffect, useState } from 'react';
import { CalendarOutlined } from '@ant-design/icons';

const { Title } = Typography;

export const TarefaScreen: FC = () => {
  return (
    <>
      <Row gutter={16} justify='center' align='top' style={{ marginBottom: 10 }} className='site-layout-background'>
        <Col span={24} className='coluna-tarefa site-layout-background' style={{ paddingBottom: 20, paddingLeft: 30, paddingRight: 30 }}>
          Tarefa
        </Col>
      </Row>
    </>
  );
};
