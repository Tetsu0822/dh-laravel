import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Card } from 'react-bootstrap';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="XOOPS 移轉測試" />

            {/* Bootstrap 導覽列 */}
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">XOOPS ➜ Laravel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">首頁</Nav.Link>
                            <Nav.Link href="#link">新聞中心</Nav.Link>
                            <NavDropdown title="分類" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">技術文件</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">社群討論</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">關於我們</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Button variant="outline-success">登入系統</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* 主內容區 */}
            <Container className="mt-5">
                <Card className="text-center shadow-sm">
                    <Card.Body>
                        <Card.Title className="display-4 text-primary">環境建置成功！</Card.Title>
                        <Card.Text className="lead mt-3">
                            你現在正看著由 Laravel 後端驅動，React + Vite 前端渲染，並使用 Bootstrap 5 樣式的頁面。
                        </Card.Text>
                        <hr />
                        <p className="text-muted">這是邁向移轉 XOOPS 的第一步。</p>
                        <Button variant="primary" size="lg">開始設計新聞列表</Button>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}